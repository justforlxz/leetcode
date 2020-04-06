cmake_minimum_required(VERSION 3.14.0)

project(leetcode)

set(CMAKE_CXX_STANDARD_REQUIRED 17)
set(CMAKE_CXX_STANDARD 17)

include(Dart)
include(CTest)

# find_package(GTest REQUIRED)
# include_directories(${GTEST_INCLUDE_DIRS})

add_executable(leetcode-unit-test
   src/0001.two-sum/two-sum.hpp
   src/0001.two-sum/test.cc
)

# target_link_libraries(leetcode-unit-test ${GTEST_BOTH_LIBRARIES})

add_test(NAME leetcode-unit-test COMMAND "${CMAKE_CURRENT_BINARY_DIR}/leetcode-unit-test")
