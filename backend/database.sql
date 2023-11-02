-- CREATE TABLE item (
--   id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   title varchar(255) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');


  CREATE TABLE `goodeal`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(80) NOT NULL,
  `lastname` VARCHAR(80) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `contact` VARCHAR(50) NOT NULL,
  `city` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`user_id`));

CREATE TABLE `goodeal`.`announce` (
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
  PRIMARY KEY (`announce_id`),

  CONSTRAINT `fk_user_announce`
  FOREIGN KEY (`user_id`)
  REFERENCES `goodeal`.`user` (`user_id`));


CREATE TABLE `goodeal`.`car_brand` (
  `car_brand_id` INT NOT NULL AUTO_INCREMENT,
  `car_brand_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`car_brand_id`));


CREATE TABLE `goodeal`.`car_model` (
  `car_model_id` INT NOT NULL AUTO_INCREMENT,
  `car_brand_id` INT NOT NULL,
  `car_model` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`car_model_id`));


CREATE TABLE `goodeal`.`car_type` (
  `car_type_id` INT NOT NULL AUTO_INCREMENT,
  `car_type` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`car_type_id`));



  CREATE TABLE `goodeal`.`favorite` (
  `favorite_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `announce_id` INT NOT NULL,
  PRIMARY KEY (`favorite_id`),

  CONSTRAINT `fk_user_favorite`
    FOREIGN KEY (`user_id`)
    REFERENCES `goodeal`.`user` (`user_id`)
    ,
  CONSTRAINT `fk_announce_favorite`
    FOREIGN KEY (`announce_id`)
    REFERENCES `goodeal`.`announce` (`announce_id`)
   );

   CREATE TABLE `goodeal`.`message` (
  `message_id` INT NOT NULL AUTO_INCREMENT,
  `announce_id` INT NOT NULL,
  `sender_user_id` INT NOT NULL,
  `receiver_user_id` INT NOT NULL,
  `message` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`message_id`),
  
   CONSTRAINT `fk_announce_message`
    FOREIGN KEY (`announce_id`)
    REFERENCES `goodeal`.`announce` (`announce_id`)
    );

CREATE TABLE `goodeal`.`newsletter` (
  `newsletter_id` INT NOT NULL AUTO_INCREMENT,
   `email` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`newsletter_id`)
     );
    
INSERT INTO `goodeal`.`user` (`user_id`, `firstname`, `lastname`, `email`, `password`, `contact`, `city`) VALUES ('1', 'othiel', 'kanagaraj', 'othiel.leith@gmail.com', 'AZERTY', '121432434', 'PARIS');
INSERT INTO `goodeal`.`user` (`user_id`, `firstname`, `lastname`, `email`, `password`, `contact`, `city`) VALUES ('2', 'fatma', 'itchir', 'fatmaitchir@gmail.com', 'AZERTY', '234234', 'PARIS');
INSERT INTO `goodeal`.`user` (`user_id`, `firstname`, `lastname`, `email`, `password`, `contact`, `city`) VALUES ('3', 'SALA', 'SALA', 'salamata@gmail.com', 'AZERTY', '23434', 'PARIS');
INSERT INTO `goodeal`.`user` (`user_id`, `firstname`, `lastname`, `email`, `password`, `contact`, `city`) VALUES ('4', 'SAIMA', 'NARAT', 'saimanarat@gmail.com', 'AZERTY', '45345', 'PARIS');



INSERT INTO `goodeal`.`announce` (`user_id`, `title`, `price`, `year`, 
`car_brand_name`, `car_model`, `motorisation`, `kilometer`, `transmission`, `car_type`, 
`power`, `condition`, `license`, `description`, `image`) 
VALUES ('1', 'A vendre magnifique 207.. super occasion', '20000.00', '2000', 'Peugeot', '207', 'Diesel', '50000', 
'Manuelle', 'Citadine', '75', 'Non', 'Avec permis', 'Voiture en bon etat.  Jamais accidentée. Non fumeur',
'https://media.istockphoto.com/id/502783184/photo/peugeot-207.jpg?s=612x612&w=0&k=20&c=J0wVPKGypKN2Ukr0IUKAAweFxFYMvnl0U2vA8e_kSTE=')

INSERT INTO `goodeal`.`announce` (`user_id`, `title`, `price`, `year`,
 `car_brand_name`, `car_model`, `motorisation`, `kilometer`, `transmission`, `car_type`,
  `power`, `condition`, `license`, `description` , `image`) 
  VALUES ('2', 'Dernier Mercedes amg', '35000', 2022, 'Mercedes', 'C_Klasse', 'Petrol', '50000', 
  'Automatic', 'Berlines', '200', 'Non', 'Avec permis', 'Voiture en bon etat',
  'https://media.istockphoto.com/id/502783184/photo/peugeot-207.jpg?s=612x612&w=0&k=20&c=J0wVPKGypKN2Ukr0IUKAAweFxFYMvnl0U2vA8e_kSTE=')




INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('VOLKSWAGEN');
INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('MERCEDES-BENZ');
INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('BMW');
INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('PEUGEOT');
INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('AUDI');
INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('RENAULT');
INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('OPEL');
INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('DACIA');
INSERT INTO `goodeal`.`car_brand` (`car_brand_name`) VALUES ('FORD');

INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('1', 'Golf');
INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('1', 'Polo');
INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('1', 'Up!');
INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('1', 'Tiguan');
INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('1', 'Passat');
INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('1', 'T-Roc');
INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('2', 'C-Klasse');
INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('2', 'A-Klasse');
INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('2', 'E-Klasse');
INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('2', 'CLA');
INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('2', 'B-Klasse');
INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('2', 'S-Klasse');
INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('3', '3-serie');
INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('3', '5-serie');
INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('3', '1-serie');
INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('3', 'X5');
INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('3', 'X1');
INSERT INTO `goodeal`.`car_model` (`car_brand_id`, `car_model`) VALUES ('3', 'X3');


INSERT INTO `goodeal`.`car_type` (`car_type`) VALUES ('Citadines');
INSERT INTO `goodeal`.`car_type` (`car_type`) VALUES ('Berlines');
INSERT INTO `goodeal`.`car_type` (`car_type`) VALUES ('4x4, suv, crossover');
INSERT INTO `goodeal`.`car_type` (`car_type`) VALUES ('Sans permis');
INSERT INTO `goodeal`.`car_type` (`car_type`) VALUES ('Breaks');
INSERT INTO `goodeal`.`car_type` (`car_type`) VALUES ('Cabriolets');
INSERT INTO `goodeal`.`car_type` (`car_type`) VALUES ('Coupés');


INSERT INTO `goodeal`.`newsletter` (`email`) VALUES ('othiel.leith@gmail.com');
INSERT INTO `goodeal`.`newsletter` (`email`) VALUES ('saima.narat@gmail.com');
INSERT INTO `goodeal`.`newsletter` (`email`) VALUES ('salamata@gmail.com');
INSERT INTO `goodeal`.`newsletter` (`email`) VALUES ('fatmaitchir@gmail.com');


INSERT INTO `goodeal`.`favorite` (`user_id`, `announce_id`) VALUES ('1', '1');


INSERT INTO `goodeal`.`message` (`announce_id`, `sender_user_id`, `receiver_user_id`, `message`) VALUES ('1', '1', '2', 'DJFKSDLLFSLDKMFJKSLDUILEZFLKHZDFHLNSDF');
INSERT INTO `goodeal`.`message` (`announce_id`, `sender_user_id`, `receiver_user_id`, `message`) VALUES ('1', '3', '4', 'IUITRITERIOVLKXNVNKFD');
