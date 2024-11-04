# C# (C Sharp) - Introduction

## C# vs. .NET

- C# is a programming language
- .NET is a framework for building applications on Windows (Not limited to C#)
  - CLR
  - Class Library

## CLR (Common Language Run-time)

- When compiling C# it is dependent on the local computer
- Job is to translate the IL code to the machine code (JIT)
- As long as the machine has CLR it can run the C# application

  Notes:

  - (Example) If you code in a windows computer the compiler will translate the code according to the native machine code.

  C#

  ```
  cmdUI.Enable(clock.GetInterface() != null);
  ```

  -------> IL Code (intermediate Language)

  ```
  .entrypoint
  .maxstack 1
  L_0000: nop
  L_0001: ldc.i4.s 60

  ```

  ------->
  Native Code

  ```
  00 2D 31    00 2E 29    73 00 61    6D 2E 67
  61 A0 40    65 6C 2D    47 43 3A    63 00 A0
  ```

## Architecture of .NET Applications

### Classes

- Building blocks
- Is a container that contains data attributes and functions (methods)
- Classes are responsible for each functionality
- Example:

  ```
  Car (NOTE: Think of it as a class)

  Data Attributes:
  Make
  Model
  Colour

  Functions:
  Start()
  Move()
  ```

- A way to organise many classes is using by a Namespace
  - Namespaces: Each containing many related classes
- Assembly (DDL(Dynamically Linked Library) or EXE)
  - A way to organise Namespaces
