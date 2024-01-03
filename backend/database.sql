CREATE TABLE car_brand (
  `car_brand_id` INT NOT NULL AUTO_INCREMENT,
  `car_brand_name` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`car_brand_id`)
   )ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE car_model (
  `car_model_id` INT NOT NULL AUTO_INCREMENT,
  `car_brand_id` INT NOT NULL,
  `car_model_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`car_model_id`),

  CONSTRAINT `fk_carbrand_carmodel`
    FOREIGN KEY (`car_brand_id`)
    REFERENCES car_brand (`car_brand_id`)
  )ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


CREATE TABLE car_type (
  `car_type_id` INT NOT NULL AUTO_INCREMENT,
  `car_type_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`car_type_id`))ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;



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
  `price` INT NOT NULL,
  `year` INT NOT NULL,
  `car_brand_id` INT NOT NULL,
  `car_model_id` INT NOT NULL,
 `motorisation` VARCHAR(20) NOT NULL,
  `kilometer` INT NOT NULL,
  `transmission` VARCHAR(20) NOT NULL,
  `car_type_id` INT NOT NULL,
    `power` INT NOT NULL,
  `state` VARCHAR(10) NOT NULL,
  `license` VARCHAR(20) NOT NULL,
  `description` TEXT(500) NOT NULL,
   `contact` VARCHAR(50) NOT NULL,
  `city` VARCHAR(50)  NOT NULL,
  `postalcode` VARCHAR(50)  NOT NULL,
  PRIMARY KEY (`announce_id`),

  CONSTRAINT `fk_user_announce`
  FOREIGN KEY (`user_id`)
  REFERENCES user(`user_id`),

  CONSTRAINT `fk_carbrand_announce`
  FOREIGN KEY (`car_brand_id`)
  REFERENCES car_brand(`car_brand_id`),

  CONSTRAINT `fk_carmodel_announce`
  FOREIGN KEY (`car_model_id`)
  REFERENCES car_model(`car_model_id`),

  CONSTRAINT `fk_cartype_announce`
  FOREIGN KEY (`car_type_id`)
  REFERENCES car_type(`car_type_id`)
  )ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE images (
  `image_id` INT NOT NULL AUTO_INCREMENT,
  `announce_id` INT NOT NULL,
  `image_1` VARCHAR(255),
  `image_2` VARCHAR(255),
  `image_3` VARCHAR(255),
  `image_4` VARCHAR(255),
  

  PRIMARY KEY (`image_id`),

  CONSTRAINT `fk_announce_images`
  FOREIGN KEY (`announce_id`)
  REFERENCES announce(`announce_id`))ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


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

   CREATE TABLE messages (
  `message_id` INT NOT NULL AUTO_INCREMENT,
  `announce_id` INT NOT NULL,
  `sender_user_id` INT NOT NULL,
  `receiver_user_id` INT NOT NULL,
  `content` TEXT NOT NULL,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`message_id`),

  FOREIGN KEY (sender_user_id) REFERENCES user(user_id),
  FOREIGN KEY (receiver_user_id) REFERENCES user(user_id),

   CONSTRAINT `fk_announce_message`
    FOREIGN KEY (`announce_id`)
    REFERENCES announce (`announce_id`)
    )ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE newsletter (
  `newsletter_id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(50) UNIQUE NOT NULL,
   PRIMARY KEY (`newsletter_id`)
     )ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO car_brand (`car_brand_name`) VALUES ('VOLKSWAGEN');
INSERT INTO car_brand (`car_brand_name`) VALUES ('MERCEDES-BENZ');
INSERT INTO car_brand (`car_brand_name`) VALUES ('BMW');
INSERT INTO car_brand (`car_brand_name`) VALUES ('PEUGEOT');
INSERT INTO car_brand (`car_brand_name`) VALUES ('AUDI');
INSERT INTO car_brand (`car_brand_name`) VALUES ('RENAULT');
INSERT INTO car_brand (`car_brand_name`) VALUES ('OPEL');
INSERT INTO car_brand (`car_brand_name`) VALUES ('DACIA');
INSERT INTO car_brand (`car_brand_name`) VALUES ('FORD');



INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('1', 'Golf');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('1', 'Polo');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('1', 'Up!');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('1', 'Tiguan');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('1', 'Passat');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('1', 'T-Roc');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('2', 'C-Klasse');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('2', 'A-Klasse');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('2', 'E-Klasse');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('2', 'CLA');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('2', 'B-Klasse');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('2', 'S-Klasse');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('3', '3-serie');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('3', '5-serie');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('3', '1-serie');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('3', 'X5');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('3', 'X1');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('3', 'X3');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('4', '208');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('4', '308');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('4', '2008');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('4', '108');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('4', '107');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('4', '207');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('5', 'A3');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('5', 'A4');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('5', 'A6');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('5', 'A1');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('5', 'A5');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('5', 'Q3');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('6', 'Clio'),('6', 'Mégane'),('6', 'Captur'),('6', 'Twingo'),('6', 'Kangoo'),('6', 'Scénic');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('7', 'Corsa'),('7', 'Astra'),('7', 'Mokka'),('7', 'Crossland X'),('7', 'Meriva'),('7', 'Insignia');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('8', 'Duster'),('8', 'Sandero'),('8', 'Logan MCV'),('8', 'Sandero Stepway'),('8', 'Spring'),('8', 'Lodgy');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES ('9', 'Focus'), ('9', 'Fiesta'), ('9', 'Kuga'), ('9', 'Ka'), ('9', 'Puma'), ('9', 'C-Max');

INSERT INTO car_type (`car_type_name`) VALUES ('Citadines');
INSERT INTO car_type (`car_type_name`) VALUES ('Berlines');
INSERT INTO car_type (`car_type_name`) VALUES ('4x4, suv, crossover');
INSERT INTO car_type (`car_type_name`) VALUES ('Sans permis');
INSERT INTO car_type (`car_type_name`) VALUES ('Breaks');
INSERT INTO car_type (`car_type_name`) VALUES ('Cabriolets');
INSERT INTO car_type (`car_type_name`) VALUES ('Coupés');


INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('SALA', 'SALA', 'sala@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$HR/lNvZ6zWRH4ObyGrlMtw$7wAqMGtpdJaSFYCmTPnV+gTaX7dwy0KC4cXhVyC5/Ks');
INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('FATMA', 'ITCHIR', 'fatmaitchir@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$lnatfSXFrBSkZWyIiUpuVg$jmgjxwAIsYzB3rHP4IQMCOeBnBUVcn8HZPTCP8/WKZw');
INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('SAIMA', 'NORAT', 'SAIMA@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$HR/lNvZ6zWRH4ObyGrlMtw$7wAqMGtpdJaSFYCmTPnV+gTaX7dwy0KC4cXhVyC5/Ks');
INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('OTHIEL', 'KANAGARAJ', 'OTHIEL@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$lnatfSXFrBSkZWyIiUpuVg$jmgjxwAIsYzB3rHP4IQMCOeBnBUVcn8HZPTCP8/WKZw');
INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('KEVIN', 'PESET', 'KEVIN@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$lnatfSXFrBSkZWyIiUpuVg$jmgjxwAIsYzB3rHP4IQMCOeBnBUVcn8HZPTCP8/WKZw');
INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('BEEBI', 'HAJRA', 'beebi@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$lnatfSXFrBSkZWyIiUpuVg$jmgjxwAIsYzB3rHP4IQMCOeBnBUVcn8HZPTCP8/WKZw');
INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('Mamou', 'SKN', 'mamou@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$lnatfSXFrBSkZWyIiUpuVg$jmgjxwAIsYzB3rHP4IQMCOeBnBUVcn8HZPTCP8/WKZw');
INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('Populo', 'Maurane', 'maurane@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$lnatfSXFrBSkZWyIiUpuVg$jmgjxwAIsYzB3rHP4IQMCOeBnBUVcn8HZPTCP8/WKZw');
INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('Joëlle', 'Kounde', 'djo@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$lnatfSXFrBSkZWyIiUpuVg$jmgjxwAIsYzB3rHP4IQMCOeBnBUVcn8HZPTCP8/WKZw');

INSERT INTO announce (`user_id`, `title`, `price`, `year`,`car_brand_id`, `car_model_id`, `motorisation`, `kilometer`, `transmission`, `car_type_id`,`power`, `state`, `license`, `description` , `contact`, `city`,`postalcode`) VALUES ('1', 'A vendre magnifique 207.. super occasion', '21000', '2000', '4', '24', 'Diesel', '50000','Manuelle', '1', '75', 'Non', 'Avec permis', 'Voiture en bon etat.  Jamais accidentée. Non fumeur, prix négociable','0611555234','PARIS','75014');
INSERT INTO announce (`user_id`, `title`, `price`, `year`,`car_brand_id`, `car_model_id`, `motorisation`, `kilometer`, `transmission`, `car_type_id`,`power`, `state`, `license`, `description` , `contact`, `city`,`postalcode`) VALUES ('2', 'Dernier Mercedes classe A', '31900', '2019', '2', '8', 'Diesel', '50000', 'Automatic', '1', '200', 'Non', 'Avec permis', 'Voiture en bon etat, roule parfaitement, pas de frais à prévoir','0645222890','PARIS','75014');
INSERT INTO announce (`user_id`, `title`, `price`, `year`,`car_brand_id`, `car_model_id`, `motorisation`, `kilometer`, `transmission`, `car_type_id`,`power`, `state`, `license`, `description` , `contact`, `city`,`postalcode`) VALUES ('3', '2022 Audi A4 Premium', '19000', '2022', '5', '26', 'Diesel',' 75000', 'Automatic', '5', '105', 'Non', 'Avec permis', 'Brand new Audi A4 Premium with low mileage.', '0623546789', 'PARIS','75014');
INSERT INTO announce (`user_id`, `title`, `price`, `year`,`car_brand_id`, `car_model_id`, `motorisation`, `kilometer`, `transmission`, `car_type_id`,`power`, `state`, `license`, `description` , `contact`, `city`,`postalcode`) VALUES ('4', '2021 Volkswagen Polo TSI', '22990', '2021', '1', '2', 'Petrol','46000', 'Automatic', '1', '110', 'yes', 'Avec permis','Well-maintained Volkswagen Polo TSI for sale.', '0623546789', 'PARIS', '75014');
INSERT INTO announce (`user_id`, `title`, `price`, `year`,`car_brand_id`, `car_model_id`, `motorisation`, `kilometer`, `transmission`, `car_type_id`,`power`, `state`, `license`, `description` , `contact`, `city`,`postalcode`) VALUES ('5', 'BMW serie 3.. super occasion', '21000', '2020', '3', '13', 'Diesel', '80000','Manuelle', '2', '75', 'Non', 'Avec permis', 'Voiture en bon etat.  Jamais accidentée. Non fumeur','0623546789','PARIS','75014');
INSERT INTO announce (`user_id`, `title`, `price`, `year`,`car_brand_id`, `car_model_id`, `motorisation`, `kilometer`, `transmission`, `car_type_id`,`power`, `state`, `license`, `description` , `contact`, `city`,`postalcode`) VALUES ('6', 'Voiture opel cabriolet', '14900', '2015', '7', '42', 'Petrol', '120000', 'Manuelle', '6', '170', 'Non', 'Avec permis', 'VEND OPEL CABRIOLET CASCADA COSMO PACK. véhicule couché dans un garage ','0623546789','PARIS','75014');
INSERT INTO announce (`user_id`, `title`, `price`, `year`,`car_brand_id`, `car_model_id`, `motorisation`, `kilometer`, `transmission`, `car_type_id`,`power`, `state`, `license`, `description` , `contact`, `city`,`postalcode`) VALUES ('7', 'FORD Kuga', '8900', '2014', '9', '51', 'Petrol', '120000', 'Manuelle', '3', '170', 'Non', 'Avec permis', 'Ford Kuga 2.0 TDCi 140 AWD powershift 4x4 5 portes. Contrôle technique ok Révision ok distribution pompe à eau 04/2022 vidange filtre 11/2023 5 places','0623546789','PARIS','75014');
INSERT INTO announce (`user_id`, `title`, `price`, `year`,`car_brand_id`, `car_model_id`, `motorisation`, `kilometer`, `transmission`, `car_type_id`,`power`, `state`, `license`, `description` , `contact`, `city`,`postalcode`) VALUES ('8', 'Voiture Mégane 3 coupe', '2500', '2001', '6', '32', 'Diesel', '300000','Manuelle', '7', '110', 'Non', 'Avec permis', 'Vend Mégane 2500€ roulante mais claquement niveau moteur a froid et siège avant un peut abîmé plus carrosserie un peut a voir','0623546789','PARIS','75003');
INSERT INTO announce (`user_id`, `title`, `price`, `year`,`car_brand_id`, `car_model_id`, `motorisation`, `kilometer`, `transmission`, `car_type_id`,`power`, `state`, `license`, `description` , `contact`, `city`,`postalcode`) VALUES ('9', 'voiture sans permis', '8900', '2014', '8', '48', 'Diesel', '75000', 'Manuelle', '4', '170', 'Non', 'Avec permis', 'Moteur refait à neuf courroie révision complète poste Bluetooth CARTE GRISE ET LIVRAISON OFFERTE','0623546789','PARIS','75014');

INSERT INTO images (`announce_id`,`image_1`, `image_2`, `image_3`, `image_4`) 
VALUES ( '1',
  'peugeot207-1.jpg',
  'peugeot207-2.jpg',
  'peugeot207-3.jpg',
  'peugeot207-4.jpg'
);
INSERT INTO images (`announce_id`,`image_1`, `image_2`, `image_3`, `image_4`) 
VALUES ( '2',
  'mercedesA-1.jpg',
  'mercedesA-2.jpg',
  'mercedesA-3.jpg',
  'mercedesA-4.jpg'
);
INSERT INTO images (`announce_id`,`image_1`, `image_2`, `image_3`, `image_4`) 
VALUES ( '3',
  'audiA4-1.jpg',
  'audiA4-2.jpg',
  'audiA4-3.jpg',
  'audiA4-4.jpg'
);

INSERT INTO images (`announce_id`,`image_1`, `image_2`, `image_3`, `image_4`) 
VALUES ( '4',
  'polo-1.jpg',
  'polo-2.jpg',
  'polo-3.jpg',
  'polo-4.jpg'
);
INSERT INTO images (`announce_id`,`image_1`, `image_2`, `image_3`, `image_4`) 
VALUES ( '5',
  'bmw-1.jpg',
  'bmw-2.jpg',
  'bmw-3.jpg',
  'bmw-4.jpg'
);
INSERT INTO images (`announce_id`,`image_1`, `image_2`, `image_3`, `image_4`) 
VALUES ( '6',
  'opel-1.jpg',
  'opel-2.jpg',
  'opel-3.jpg',
  'opel-4.jpg'
);
INSERT INTO images (`announce_id`,`image_1`, `image_2`, `image_3`, `image_4`) 
VALUES ( '7',
  'ford-1.jpg',
  'ford-2.jpg',
  'ford-3.jpg',
  'ford-4.jpg'
);
INSERT INTO images (`announce_id`,`image_1`, `image_2`, `image_3`, `image_4`) 
VALUES ( '9',
  'sanspermis-1.jpg',
  'sanspermis-2.jpg',
  'sanspermis-3.jpg',
  'sanspermis-4.jpg'
);

INSERT INTO images (`announce_id`,`image_1`, `image_2`, `image_3`, `image_4`) 
VALUES ( '8',
  'megane-1.jpg',
  'megane-2.jpg',
  'megane-3.jpg',
  'megane-4.jpg'
);


-- INSERT INTO messages (announce_id, sender_user_id, receiver_user_id, content) 
-- VALUES ('1', '2', '1', 'Coucou Sala');



-- INSERT INTO `goodeal`.`newsletter` (`email`) VALUES ('othiel.leith@gmail.com');
-- INSERT INTO `goodeal`.`newsletter` (`email`) VALUES ('saima.narat@gmail.com');
-- INSERT INTO `goodeal`.`newsletter` (`email`) VALUES ('salamata@gmail.com');
-- INSERT INTO `goodeal`.`newsletter` (`email`) VALUES ('fatmaitchir@gmail.com');


-- INSERT INTO `goodeal`.`favorite` (`user_id`, `announce_id`) VALUES ('1', '1');

