use social;

CREATE TABLE `users` (
  `id` int AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `name` varchar(45) NOT NULL,
  `desc` varchar(45) DEFAULT NULL,
  `coverpic` varchar(45) DEFAULT NULL,
  `profilepic` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ;

CREATE TABLE `social`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `desc` VARCHAR(200) NULL,
  `img` VARCHAR(200) NULL,
  `userId` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `userId_idx` (`userId` ASC),
  CONSTRAINT `userId`
    FOREIGN KEY (`userId`)
    REFERENCES `social`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE `social`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `desc` VARCHAR(200) NULL,
  `createdAt` DATETIME NULL,
  `userId` INT NULL,
  `postId` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `userId_idx` (`userId` ASC),
  INDEX `postId_idx` (`postId` ASC),
  CONSTRAINT `commentUserId`
    FOREIGN KEY (`userId`)
    REFERENCES `social`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `commentPostId`
    FOREIGN KEY (`postId`)
    REFERENCES `social`.`posts` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE `social`.`relationships` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `followerUser` INT NULL,
  `followedUser` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `followedUser_idx` (`followedUser` ASC),
  INDEX `followerUser_idx` (`followerUser` ASC),
  CONSTRAINT `followerUser`
    FOREIGN KEY (`followerUser`)
    REFERENCES `social`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `followedUser`
    FOREIGN KEY (`followedUser`)
    REFERENCES `social`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE `social`.`likes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NULL,
  `postId` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `likeUserId_idx` (`userId` ASC),
  INDEX `likePostId_idx` (`postId` ASC),
  CONSTRAINT `likeUserId`
    FOREIGN KEY (`userId`)
    REFERENCES `social`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `likePostId`
    FOREIGN KEY (`postId`)
    REFERENCES `social`.`posts` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

select * from likes;



