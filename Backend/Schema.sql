-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`cohort`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cohort` (
  `idcohort` INT NOT NULL AUTO_INCREMENT,
  `cohortName` VARCHAR(45) NOT NULL,
  `cohortImage` VARCHAR(45) NULL,
  PRIMARY KEY (`idcohort`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`student`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`student` (
  `idstudent` INT NOT NULL AUTO_INCREMENT,
  `studentFirstName` VARCHAR(45) NOT NULL,
  `studentLastName` VARCHAR(45) NOT NULL,
  `studentAge` VARCHAR(45) NOT NULL,
  `studentImage` VARCHAR(45) NULL,
  `cohortID` INT NULL,
  PRIMARY KEY (`idstudent`),
  INDEX `cohortId_idx` (`cohortID` ASC) VISIBLE,
  CONSTRAINT `cohort`
    FOREIGN KEY (`cohortID`)
    REFERENCES `mydb`.`cohort` (`idcohort`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`instructor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`instructor` (
  `idinstructor` INT NOT NULL AUTO_INCREMENT,
  `instructorFirstName` VARCHAR(45) NOT NULL,
  `instructorLastName` VARCHAR(45) NOT NULL,
  `instructorAge` VARCHAR(45) NOT NULL,
  `instructorImage` VARCHAR(45) NULL,
  `cohortId` INT NULL,
  PRIMARY KEY (`idinstructor`),
  INDEX `cohortId_idx` (`cohortId` ASC) VISIBLE,
  CONSTRAINT `cohorti`
    FOREIGN KEY (`cohortId`)
    REFERENCES `mydb`.`cohort` (`idcohort`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`instructorFeedBack`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`instructorFeedBack` (
  `idinstructorFeedBack` INT NOT NULL AUTO_INCREMENT,
  `idStudent` INT NULL,
  `idInstructor` INT NULL,
  `feedbackContent` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idinstructorFeedBack`),
  INDEX `idStudent_idx` (`idStudent` ASC, `idInstructor` ASC) VISIBLE,
  INDEX `idInstructor_idx` (`idInstructor` ASC) VISIBLE,
  CONSTRAINT `idStud`
    FOREIGN KEY (`idStudent`)
    REFERENCES `mydb`.`student` (`idstudent`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idInstruc`
    FOREIGN KEY (`idInstructor`)
    REFERENCES `mydb`.`instructor` (`idinstructor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`studentFeedback`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`studentFeedback` (
  `idstudentFeedback` INT NOT NULL AUTO_INCREMENT,
  `idStudent` INT NULL,
  `idInstructor` INT NULL,
  `feedbackContent` VARCHAR(45) NULL,
  PRIMARY KEY (`idstudentFeedback`),
  INDEX `idStudent_idx` (`idStudent` ASC) VISIBLE,
  INDEX `idInstructor_idx` (`idInstructor` ASC) VISIBLE,
  CONSTRAINT `idStude`
    FOREIGN KEY (`idStudent`)
    REFERENCES `mydb`.`student` (`idstudent`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idInstruct`
    FOREIGN KEY (`idInstructor`)
    REFERENCES `mydb`.`instructor` (`idinstructor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
