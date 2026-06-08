---
title: Create CLI Tools
description: สร้าง CLI tools ที่รองรับทั้ง interactive และ argument modes
auto_execution_mode: 3
---

## Prompt

ใช้ workflow นี้เมื่อต้องการสร้าง CLI tools ที่มีทั้ง interactive mode และ argument mode

## Execute

1. Design CLI Interface

- กำหนด CLI name และ purpose
- ออกแบบ command structure
- ระบุ arguments และ options
- วางแผน interactive prompts

2. Setup Project Structure

- สร้าง project directory
- ติดตั้ง dependencies (commander, inquirer, etc.)
- สร้าง entry point file
- Setup build configuration

3. Implement Argument Mode

- ใช้ library สำหรับ argument parsing
- Implement commands และ subcommands
- Add help text และ documentation
- Handle errors gracefully

4. Implement Interactive Mode

- สร้าง prompts สำหรับ user input
- Implement wizard-style flows
- Add validation สำหรับ inputs
- Provide clear feedback

5. Add Dual Mode Support

- Detect ว่าเป็น interactive หรือ arg mode
- Implement fallback behavior
- รองรับ mixed usage
- Document mode switching

6. Test and Package

- เขียน tests สำหรับทั้ง 2 modes
- Test edge cases และ error handling
- Create executable package
- Add documentation

## Rules

1. Consistent Interface

- ใช้ consistent naming conventions
- รองรับ --help และ --version
- ใช้ exit codes ที่มาตรฐาน
- มี clear error messages

2. Progressive Disclosure

- Arg mode สำหรับ power users
- Interactive mode สำหรับ beginners
- ไม่ overwhelm users ด้วย options
- Smart defaults

3. Robust Error Handling

- Validate inputs ทั้งหมด
- Provide helpful error messages
- Handle edge cases gracefully
- ไม่ crash unexpectedly

4. Documentation

- เขียน README ที่ครบถ้วน
- ให้ examples สำหรับทั้ง 2 modes
- Document installation steps
- Add troubleshooting guide

## Expected Outcome

- CLI tool ที่รองรับทั้ง interactive และ arg modes
- Well-documented interface
- Robust error handling
- Tested functionality
- Ready for distribution
