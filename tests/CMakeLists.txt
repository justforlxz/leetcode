include(Dart)
include(CTest)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -fprofile-arcs -ftest-coverage -lgcov")

find_package(GTest REQUIRED)

include_directories(${CMAKE_BINARY_DIR}/include/)
include_directories(../src)
set(CMAKE_INCLUDE_CURRENT_DIR ON)
file(GLOB_RECURSE TESTS_SRCS
    ./test_s1.cpp
    ./test_s11.cpp
    ./test_s217.cpp
    ./test_s598.cpp
)

add_executable(leetcode leetcode.cpp ${TESTS_SRCS})
target_link_libraries(leetcode PRIVATE
    ${GTEST_LIBRARIES}
    pthread
)
add_custom_target(check
    WORKING_DIRECTORY ${CMAKE_BINARY_DIR}/tests/leetcode)

add_custom_command(TARGET check
    COMMAND echo " =================== CREAT LCOV REPROT BEGIN ==================== "

    #1.清理原先的gcov信息
    COMMAND lcov --directory ./CMakeFiles/leetcode.dir --zerocounters
    COMMAND ./leetcode

    #2.收集gcov信息到.info文件中
    COMMAND lcov --directory ../ --capture --output-file ./coverage.info

    #3.过滤一些我们不感兴趣的文件的覆盖率信息
    COMMAND echo " =================== do filter begin ==================== "
    COMMAND lcov --remove ./coverage.info
    '*/leetcode_autogen/*' '*/usr/include/*' '*/tests/*' '*/googletest/*' 'gtest/*' '*/gtest/*'
    -o ./coverage.info
    COMMAND echo " =================== do filter end ==================== "

    #3.将.info信息生成报告到reprot文件夹中
    COMMAND genhtml -o ${CMAKE_BINARY_DIR}/tests/report ./coverage.info

    COMMAND echo " =================== CREAT LCOV REPROT END ==================== "

    COMMAND echo " Coverage files have been output to ${CMAKE_BINARY_DIR}/tests/report "

    WORKING_DIRECTORY ${CMAKE_BINARY_DIR}/tests/
)
