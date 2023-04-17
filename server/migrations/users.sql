CREATE TABLE "users" (
  "id" serial,
  "username" varchar(50) NOT NULL,
  "password" varchar(50) NOT NULL,
  "first_name" varchar(50) NOT NULL,
  "middle_name" varchar(50) NOT NULL,
  "last_name" varchar(50) NOT NULL,
  "age" int NOT NULL,
  "gender" varchar(50) NOT NULL,
  "mobile_no" varchar(15) NOT NULL,
  "email" varchar(320) NOT NULL,
  "role" varchar(50) NOT NULL
  );
