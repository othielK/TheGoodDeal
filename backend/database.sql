 CREATE TABLE user (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(80) NOT NULL,
  `lastname` VARCHAR(80) NOT NULL,
  `email` VARCHAR(100) UNIQUE NOT NULL,
  `hashedPassword` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`user_id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE announce (
  `announce_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `title` VARCHAR(100) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `year` YEAR(4) NOT NULL,
  `car_brand_name` VARCHAR(50) NOT NULL,
  `car_model` VARCHAR(50) NOT NULL,
  `motorisation` VARCHAR(20) NOT NULL,
  `kilometer` INT NOT NULL,
  `transmission` VARCHAR(20) NOT NULL,
  `car_type` VARCHAR(50) NOT NULL,
  `power` INT NOT NULL,
  `condition` VARCHAR(10) NOT NULL,
  `license` VARCHAR(20) NOT NULL,
  `description` TEXT(500) NOT NULL,
  `image` TEXT NOT NULL,
  `contact` VARCHAR(50) NOT NULL,
  `city` VARCHAR(50)  NOT NULL,
  PRIMARY KEY (`announce_id`),

  CONSTRAINT `fk_user_announce`
  FOREIGN KEY (`user_id`)
  REFERENCES user(`user_id`))ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


CREATE TABLE car_brand (
  `car_brand_id` INT NOT NULL AUTO_INCREMENT,
  `car_brand_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`car_brand_id`))ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


CREATE TABLE car_model (
  `car_model_id` INT NOT NULL AUTO_INCREMENT,
  `car_brand_id` INT NOT NULL,
  `car_model` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`car_model_id`))ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


CREATE TABLE car_type (
  `car_type_id` INT NOT NULL AUTO_INCREMENT,
  `car_type` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`car_type_id`))ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

  CREATE TABLE favorite (
  `favorite_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `announce_id` INT NOT NULL,
  PRIMARY KEY (`favorite_id`),

  CONSTRAINT `fk_user_favorite`
    FOREIGN KEY (`user_id`)
    REFERENCES user (`user_id`)
    ,
  CONSTRAINT `fk_announce_favorite`
    FOREIGN KEY (`announce_id`)
    REFERENCES announce (`announce_id`)
   )ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

   CREATE TABLE message (
  `message_id` INT NOT NULL AUTO_INCREMENT,
  `announce_id` INT NOT NULL,
  `sender_user_id` INT NOT NULL,
  `receiver_user_id` INT NOT NULL,
  `message` VARCHAR(500) NOT NULL,
  `msgsentdate` date NOT NULL,
  PRIMARY KEY (`message_id`),
  
   CONSTRAINT `fk_announce_message`
    FOREIGN KEY (`announce_id`)
    REFERENCES announce (`announce_id`)
    )ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE newsletter (
  `newsletter_id` INT NOT NULL AUTO_INCREMENT,
   `email` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`newsletter_id`)
     )ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
    
INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('SALA', 'sala', 'sala@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$HR/lNvZ6zWRH4ObyGrlMtw$7wAqMGtpdJaSFYCmTPnV+gTaX7dwy0KC4cXhVyC5/Ks');
INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('fatma', 'itchir', 'fatmaitchir@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$lnatfSXFrBSkZWyIiUpuVg$jmgjxwAIsYzB3rHP4IQMCOeBnBUVcn8HZPTCP8/WKZw');

-- INSERT INTO `goodeal`.`announce` (`user_id`, `title`, `price`, `year`, 
-- `car_brand_name`, `car_model`, `motorisation`, `kilometer`, `transmission`, `car_type`, 
-- `power`, `condition`, `license`, `description`, `image`) 
-- VALUES ('1', 'A vendre magnifique 207.. super occasion', '20000.00', '2000', 'Peugeot', '207', 'Diesel', '50000', 
-- 'Manuelle', 'Citadine', '75', 'Non', 'Avec permis', 'Voiture en bon etat.  Jamais accidentée. Non fumeur',
-- 'https://media.istockphoto.com/id/502783184/photo/peugeot-207.jpg?s=612x612&w=0&k=20&c=J0wVPKGypKN2Ukr0IUKAAweFxFYMvnl0U2vA8e_kSTE=')

-- INSERT INTO `goodeal`.`announce` (`user_id`, `title`, `price`, `year`,
--  `car_brand_name`, `car_model`, `motorisation`, `kilometer`, `transmission`, `car_type`,
--   `power`, `condition`, `license`, `description` , `image`) 
--   VALUES ('2', 'Dernier Mercedes amg', '35000', 2022, 'Mercedes', 'C_Klasse', 'Petrol', '50000', 
--   'Automatic', 'Berlines', '200', 'Non', 'Avec permis', 'Voiture en bon etat',
--   'https://media.istockphoto.com/id/502783184/photo/peugeot-207.jpg?s=612x612&w=0&k=20&c=J0wVPKGypKN2Ukr0IUKAAweFxFYMvnl0U2vA8e_kSTE=')




-- INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('VOLKSWAGEN');
-- INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('MERCEDES-BENZ');
-- INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('BMW');
-- INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('PEUGEOT');
-- INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('AUDI');
-- INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('RENAULT');
-- INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('OPEL');
-- INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('DACIA');
-- INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('FORD');

-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('1', 'Golf');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('1', 'Polo');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('1', 'Up!');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('1', 'Tiguan');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('1', 'Passat');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('1', 'T-Roc');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('2', 'C-Klasse');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('2', 'A-Klasse');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('2', 'E-Klasse');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('2', 'CLA');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('2', 'B-Klasse');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('2', 'S-Klasse');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('3', '3-serie');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('3', '5-serie');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('3', '1-serie');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('3', 'X5');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('3', 'X1');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('3', 'X3');


-- INSERT INTO `goodeal`.`car_type` (`car_type`) VALUES ('Citadines');
-- INSERT INTO `goodeal`.`car_type` (`car_type`) VALUES ('Berlines');
-- INSERT INTO `goodeal`.`car_type` (`car_type`) VALUES ('4x4, suv, crossover');
-- INSERT INTO `goodeal`.`car_type` (`car_type`) VALUES ('Sans permis');
-- INSERT INTO `goodeal`.`car_type` (`car_type`) VALUES ('Breaks');
-- INSERT INTO `goodeal`.`car_type` (`car_type`) VALUES ('Cabriolets');
-- INSERT INTO `goodeal`.`car_type` (`car_type`) VALUES ('Coupés');


-- INSERT INTO `goodeal`.`newsletter` (`email`) VALUES ('othiel.leith@gmail.com');
-- INSERT INTO `goodeal`.`newsletter` (`email`) VALUES ('saima.narat@gmail.com');
-- INSERT INTO `goodeal`.`newsletter` (`email`) VALUES ('salamata@gmail.com');
-- INSERT INTO `goodeal`.`newsletter` (`email`) VALUES ('fatmaitchir@gmail.com');


-- INSERT INTO `goodeal`.`favorite` (`user_id`, `announce_id`) VALUES ('1', '1');


-- INSERT INTO `goodeal`.`message` (`announce_id`, `sender_user_id`, `receiver_user_id`, `message`) VALUES ('1', '1', '2', 'DJFKSDLLFSLDKMFJKSLDUILEZFLKHZDFHLNSDF');
-- INSERT INTO `goodeal`.`message` (`announce_id`, `sender_user_id`, `receiver_user_id`, `message`) VALUES ('1', '3', '4', 'IUITRITERIOVLKXNVNKFD');
=======

-- INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

  CREATE TABLE user (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(80) NOT NULL,
  `lastname` VARCHAR(80) NOT NULL,
  `email` VARCHAR(100) UNIQUE NOT NULL,
  `hashedPassword` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`user_id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE announce (
  `announce_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `title` VARCHAR(100) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `year` YEAR(4) NOT NULL,
  `car_brand_name` VARCHAR(50) NOT NULL,
  `car_model` VARCHAR(50) NOT NULL,
  `motorisation` VARCHAR(20) NOT NULL,
  `kilometer` INT NOT NULL,
  `transmission` VARCHAR(20) NOT NULL,
  `car_type` VARCHAR(50) NOT NULL,
  `power` INT NOT NULL,
  `condition` VARCHAR(10) NOT NULL,
  `license` VARCHAR(20) NOT NULL,
  `description` TEXT(500) NOT NULL,
  `image` TEXT NOT NULL,
  `contact` VARCHAR(50) NOT NULL,
  `city` VARCHAR(50)  NOT NULL,
  `postalcode` INT  NOT NULL,
  PRIMARY KEY (`announce_id`),

  CONSTRAINT `fk_user_announce`
  FOREIGN KEY (`user_id`)
  REFERENCES user(`user_id`))ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


CREATE TABLE car_brand (
  `car_brand_id` INT NOT NULL AUTO_INCREMENT,
  `car_brand_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`car_brand_id`))ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


CREATE TABLE car_model (
  `car_model_id` INT NOT NULL AUTO_INCREMENT,
  `car_brand_id` INT NOT NULL,
  `car_model` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`car_model_id`))ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


CREATE TABLE car_type (
  `car_type_id` INT NOT NULL AUTO_INCREMENT,
  `car_type` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`car_type_id`))ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

  CREATE TABLE favorite (
  `favorite_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `announce_id` INT NOT NULL,
  PRIMARY KEY (`favorite_id`),

  CONSTRAINT `fk_user_favorite`
    FOREIGN KEY (`user_id`)
    REFERENCES user (`user_id`)
    ,
  CONSTRAINT `fk_announce_favorite`
    FOREIGN KEY (`announce_id`)
    REFERENCES announce (`announce_id`)
   )ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

   CREATE TABLE message (
  `message_id` INT NOT NULL AUTO_INCREMENT,
  `announce_id` INT NOT NULL,
  `sender_user_id` INT NOT NULL,
  `receiver_user_id` INT NOT NULL,
  `message` VARCHAR(500) NOT NULL,
  `msgsentdate` date NOT NULL,
  PRIMARY KEY (`message_id`),
  
   CONSTRAINT `fk_announce_message`
    FOREIGN KEY (`announce_id`)
    REFERENCES announce (`announce_id`)
    )ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE newsletter (
  `newsletter_id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(50) UNIQUE NOT NULL,
   PRIMARY KEY (`newsletter_id`)
     )ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
    
INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('SALA', 'sala', 'sala@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$HR/lNvZ6zWRH4ObyGrlMtw$7wAqMGtpdJaSFYCmTPnV+gTaX7dwy0KC4cXhVyC5/Ks');
INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('fatma', 'itchir', 'fatmaitchir@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$lnatfSXFrBSkZWyIiUpuVg$jmgjxwAIsYzB3rHP4IQMCOeBnBUVcn8HZPTCP8/WKZw');
INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('saima', 'NORAT', 'sAIMA@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$HR/lNvZ6zWRH4ObyGrlMtw$7wAqMGtpdJaSFYCmTPnV+gTaX7dwy0KC4cXhVyC5/Ks');
INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('OTHIEL', 'KANAGARAJ', 'OTHIEL@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$lnatfSXFrBSkZWyIiUpuVg$jmgjxwAIsYzB3rHP4IQMCOeBnBUVcn8HZPTCP8/WKZw');

INSERT INTO announce (`user_id`, `title`, `price`, `year`,`car_brand_name`, `car_model`, `motorisation`, `kilometer`, `transmission`, `car_type`,`power`, `condition`, `license`, `description`, `image`,`contact` , `city`,`postalcode`) VALUES ('1', 'A vendre magnifique 207.. super occasion', '20000.00', '2000', 'Peugeot', '207', 'Diesel', '50000','Manuelle', 'Citadine', '75', 'Non', 'Avec permis', 'Voiture en bon etat.  Jamais accidentée. Non fumeur','https://media.istockphoto.com/id/502783184/photo/peugeot-207.jpg?s=612x612&w=0&k=20&c=J0wVPKGypKN2Ukr0IUKAAweFxFYMvnl0U2vA8e_kSTE=','435345345','PARIS',75014);
INSERT INTO announce (`user_id`, `title`, `price`, `year`,`car_brand_name`, `car_model`, `motorisation`, `kilometer`, `transmission`, `car_type`,`power`, `condition`, `license`, `description` , `image`,`contact`, `city`,`postalcode`) VALUES ('2', 'Dernier Mercedes amg', '35000', 2022, 'Mercedes', 'C_Klasse', 'Petrol', '50000', 'Automatic', 'Berlines', '200', 'Non', 'Avec permis', 'Voiture en bon etat','https://imgd.aeplcdn.com/370x208/n/cw/ec/116201/c-class-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80','435345345','PARIS',75014);
INSERT INTO announce (`user_id`, `title`, `price`, `year`, `car_brand_name`, `car_model`, `motorisation`, `kilometer`, `transmission`, `car_type`, `power`, `condition`,`license`, `description`, `image`, `contact`, `city`,`postalcode`) VALUES ('3', '2022 Audi A4 Premium', 35000.00, 2022, 'Audi', 'A4', 'Diesel', 15000, 'Automatic', 'Sedan', 220, 'Non', 'Avec permis', 'Brand new Audi A4 Premium with low mileage.', 'https://vehicle-images.dealerinspire.com/d425-11002263/WAUDAAF4XPN008695/253716c405b9ee21f490653aa08ec070.jpg', '12345678', 'PARIS',75014);
INSERT INTO announce ( `user_id`, `title`, `price`, `year`, `car_brand_name`, `car_model`, `motorisation`, `kilometer`, `transmission`, `car_type`, `power`, `condition`, `license`, `description`, `image`, `contact`, `city`,`postalcode`) VALUES ('4','2021 Volkswagen Polo TSI', 20000, 2021, 'Volkswagen', 'Polo', 'Diesel', 18000, 'Automatic', 'Hatchback', 110, 'yes', 'Avec permis','Well-maintained Volkswagen Polo TSI for sale.', 'https://spn-mda.spinny.com/img/w_bhOcE4TGmSQptVZkm9OQ/mobile/file.JPG?w=300&dpr=1.5', '78833032', 'PARIS', 75014);


-- INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('VOLKSWAGEN');
-- INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('MERCEDES-BENZ');
-- INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('BMW');
-- INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('PEUGEOT');
-- INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('AUDI');
-- INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('RENAULT');
-- INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('OPEL');
-- INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('DACIA');
-- INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('FORD');

-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('1', 'Golf');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('1', 'Polo');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('1', 'Up!');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('1', 'Tiguan');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('1', 'Passat');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('1', 'T-Roc');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('2', 'C-Klasse');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('2', 'A-Klasse');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('2', 'E-Klasse');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('2', 'CLA');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('2', 'B-Klasse');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('2', 'S-Klasse');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('3', '3-serie');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('3', '5-serie');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('3', '1-serie');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('3', 'X5');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('3', 'X1');
-- INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('3', 'X3');


-- INSERT INTO `goodeal`.`car_type` (`car_type`) VALUES ('Citadines');
-- INSERT INTO `goodeal`.`car_type` (`car_type`) VALUES ('Berlines');
-- INSERT INTO `goodeal`.`car_type` (`car_type`) VALUES ('4x4, suv, crossover');
-- INSERT INTO `goodeal`.`car_type` (`car_type`) VALUES ('Sans permis');
-- INSERT INTO `goodeal`.`car_type` (`car_type`) VALUES ('Breaks');
-- INSERT INTO `goodeal`.`car_type` (`car_type`) VALUES ('Cabriolets');
-- INSERT INTO `goodeal`.`car_type` (`car_type`) VALUES ('Coupés');


-- INSERT INTO `goodeal`.`newsletter` (`email`) VALUES ('othiel.leith@gmail.com');
-- INSERT INTO `goodeal`.`newsletter` (`email`) VALUES ('saima.narat@gmail.com');
-- INSERT INTO `goodeal`.`newsletter` (`email`) VALUES ('salamata@gmail.com');
-- INSERT INTO `goodeal`.`newsletter` (`email`) VALUES ('fatmaitchir@gmail.com');


-- INSERT INTO `goodeal`.`favorite` (`user_id`, `announce_id`) VALUES ('1', '1');


-- INSERT INTO `goodeal`.`message` (`announce_id`, `sender_user_id`, `receiver_user_id`, `message`) VALUES ('1', '1', '2', 'DJFKSDLLFSLDKMFJKSLDUILEZFLKHZDFHLNSDF');
-- INSERT INTO `goodeal`.`message` (`announce_id`, `sender_user_id`, `receiver_user_id`, `message`) VALUES ('1', '3', '4', 'IUITRITERIOVLKXNVNKFD');