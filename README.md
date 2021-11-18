# Proxy: A Modern-Day Attendance Management System


## Data Schema

```
Users
    |- name
    |- srn
    |- classes
    |- last_active
    |- created
    |- last_attended_class
    |- type: STUDENT|TEACHER
Classes
    |- Students
    |- Teachers
    |- Name
    |- latest_session
    |- average_attendance
    |- latest_report
    |   |- timestamp
    |   |- average_present_rate
    |   |- average_absent_rate
    |   |- normalized_decimal_present
    |   |- normalized_decimal_absent
Sessions
    |- Class
    |- [Report]
    |   |- Student
    |   |- Status: ABSENT|PRESENT
    |- Validator_code: UUID
    |- initiated_timestamp
    |- closing_timestamp
```

## Application Flows

Attendance Check Flow - 
1. QR Code distributed on Attendance Screen with UUID
2. Student Validator Interface recieves UUID in QR Code
3. Request sent to backend with proposed valid UUID
4. If UUID Valid, attendance marked

