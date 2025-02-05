CREATE SCHEMA qr_attendance;

CREATE TABLE qr_attendance.classes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE qr_attendance.professors (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    email VARCHAR(30) UNIQUE NOT NULL,
    password VARCHAR(80) NOT NULL
);

CREATE TABLE qr_attendance.students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    email VARCHAR(30) UNIQUE NOT NULL,
    password VARCHAR(80) NOT NULL
);

CREATE TABLE qr_attendance.professor_classes (
    professor_id INT REFERENCES qr_attendance.professors(id) ON DELETE CASCADE,
    class_id INT REFERENCES qr_attendance.classes(id) ON DELETE CASCADE,
    PRIMARY KEY (professor_id, class_id)
);

CREATE TABLE qr_attendance.student_classes (
    student_id INT REFERENCES qr_attendance.students(id) ON DELETE CASCADE,
    class_id INT REFERENCES qr_attendance.classes(id) ON DELETE CASCADE,
    PRIMARY KEY (student_id, class_id)
);

CREATE TABLE qr_attendance.attendance (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES qr_attendance.students(id) ON DELETE CASCADE,
    class_id INT REFERENCES qr_attendance.classes(id) ON DELETE CASCADE,
    scanned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6)
);