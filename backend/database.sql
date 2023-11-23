CREATE TABLE car_brand (
  `car_brand_id` INT NOT NULL AUTO_INCREMENT,
  `car_brand_name` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`car_brand_id`)
   )ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 ;

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
  
  CREATE TABLE images (
  `image_id` INT NOT NULL AUTO_INCREMENT,
  `image_1` VARCHAR(255) NOT NULL,
  `image_2` VARCHAR(255) NULL,
  `image_3` VARCHAR(255) NULL,
  `image_4` VARCHAR(255) NULL,
  PRIMARY KEY (`image_id`))ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

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
  `car_brand_id` INT NOT NULL,
  `car_model_id` INT NOT NULL,
 `motorisation` VARCHAR(20) NOT NULL,
  `kilometer` INT NOT NULL,
  `transmission` VARCHAR(20) NOT NULL,
  `car_type_id` INT NOT NULL,
  `power` INT NOT NULL,
  `condition` VARCHAR(10) NOT NULL,
  `license` VARCHAR(20) NOT NULL,
  `description` TEXT(500) NOT NULL,
  `image_id` INT NOT NULL,
  `contact` VARCHAR(50) NOT NULL,
  `city` VARCHAR(50)  NOT NULL,
  `postalcode` INT  NOT NULL,
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
  REFERENCES car_type(`car_type_id`),

  CONSTRAINT `fk_image_announce`
  FOREIGN KEY (`image_id`)
  REFERENCES images (`image_id`)
  )ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


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


INSERT INTO car_brand (`car_brand_name`) VALUES ('VOLKSWAGEN ');
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
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES 
('6', 'Clio'),
('6', 'Mégane'),
('6', 'Captur'),
('6', 'Twingo'),
('6', 'Kangoo'),
('6', 'Scénic');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES 
('7', 'Corsa'),
('7', 'Astra'),
('7', 'Mokka'),
('7', 'Crossland X'),
('7', 'Meriva'),
('7', 'Insignia');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES 
('8', 'Duster'),
('8', 'Sandero'),
('8', 'Logan MCV'),
('8', 'Sandero Stepway'),
('8', 'Spring'),
('8', 'Lodgy');
INSERT INTO car_model (`car_brand_id`, `car_model_name`) VALUES 
('9', 'Focus'), 
('9', 'Fiesta'), 
('9', 'Kuga'), 
('9', 'Ka'), 
('9', 'Puma'), 
('9', 'C-Max');

INSERT INTO car_type (`car_type_name`) VALUES 
('Citadines'),
('Berlines'),
('4x4, suv, crossover'),
('Breaks'),
('Cabriolets'),
('Coupés');


INSERT INTO images (`image_1`, `image_2`, `image_3`, `image_4`) 
VALUES (
  'https://media.istockphoto.com/id/502783184/photo/peugeot-207.jpg?s=612x612&w=0&k=20&c=J0wVPKGypKN2Ukr0IUKAAweFxFYMvnl0U2vA8e_kSTE=',
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/70/ae/70/70ae702e23406bf0ceb28f1e9003da4e8be44147.jpg?rule=ad-large',
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/f3/ba/ac/f3baac1b3b5e75364b4393b592f43a92aba944fa.jpg?rule=ad-large',
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/90/ce/a1/90cea1b6e81bd53bb7a4753a5052c9b301eab438.jpg?rule=ad-large'
),
(
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/55/c4/fd/55c4fd69ece05dd9996634cee5013cdd8c1c4a5f.jpg?rule=ad-large',
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/df/e5/36/dfe5364f1a3b91bcb5ff74f6e4c3278619a8bea5.jpg?rule=ad-large',
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/3f/8a/54/3f8a5446ce0f908eb7444b2d33f7d4fba794d577.jpg?rule=ad-large',
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/ce/d1/d0/ced1d05c369076d0c2c01801b8db15d5343df467.jpg?rule=ad-large'
),
(
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/97/9d/14/979d14ccdbf3ac5118e947b8af74e1c1c7d705a5.jpg?rule=ad-large',
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/fc/ff/df/fcffdf14212dfd5a1d5561671ef441c14e9bce4a.jpg?rule=ad-large',
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/37/41/d2/3741d2900188555373caa20a37c8c138d64bd774.jpg?rule=ad-large',
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/37/41/d2/3741d2900188555373caa20a37c8c138d64bd774.jpg?rule=ad-large'

),
(
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/a7/d6/be/a7d6be680ad48d064e58b9d0e98f84620531ae6e.jpg?rule=ad-large',
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/97/15/ee/9715ee3b059d378c6f04d29ef4c5ef1b037672f8.jpg?rule=ad-large',
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/a9/76/12/a976125fe6f921752781537fd3709bca924ae47b.jpg?rule=ad-large',
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/a9/76/12/a976125fe6f921752781537fd3709bca924ae47b.jpg?rule=ad-large'
),
(
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/02/04/28/02042815cd0ac9fe9de4bf2be2372487256b35c2.jpg?rule=ad-large',
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/6d/69/80/6d69805175b58c8356bd67df65abd1b66db66759.jpg?rule=ad-large',
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/e0/2c/43/e02c4386025cc4f30b1df142245dcb0eeeae8abd.jpg?rule=ad-large',
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/e0/2c/43/e02c4386025cc4f30b1df142245dcb0eeeae8abd.jpg?rule=ad-large'
),
(
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/d7/83/65/d783654bd4286a5be2d71a49784d3de4b7b70a6d.jpg?rule=ad-large',
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/97/28/59/9728599d6816b629d035f478f04742846f3f69a7.jpg?rule=ad-large',
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/08/36/35/0836350315fcc31a0423c7eee1dbe3e745d7b234.jpg?rule=ad-large',
  'https://img.leboncoin.fr/api/v1/lbcpb1/images/9b/18/5a/9b185ad2d927e8e071b3cbaa00d6aea4f3e876ca.jpg?rule=ad-large'
);



INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('SALA', 'sala', 'sala@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$HR/lNvZ6zWRH4ObyGrlMtw$7wAqMGtpdJaSFYCmTPnV+gTaX7dwy0KC4cXhVyC5/Ks');
INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('fatma', 'itchir', 'fatmaitchir@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$lnatfSXFrBSkZWyIiUpuVg$jmgjxwAIsYzB3rHP4IQMCOeBnBUVcn8HZPTCP8/WKZw');
INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('saima', 'NORAT', 'sAIMA@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$HR/lNvZ6zWRH4ObyGrlMtw$7wAqMGtpdJaSFYCmTPnV+gTaX7dwy0KC4cXhVyC5/Ks');
INSERT INTO user (`firstname`, `lastname`, `email`, `hashedPassword`) VALUES ('OTHIEL', 'KANAGARAJ', 'OTHIEL@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$lnatfSXFrBSkZWyIiUpuVg$jmgjxwAIsYzB3rHP4IQMCOeBnBUVcn8HZPTCP8/WKZw');


INSERT INTO announce (`user_id`, `title`, `price`, `year`, `car_brand_id`, `car_model_id`, `motorisation`, `kilometer`, `transmission`, `car_type_id`, `power`, `condition`, `license`, `description`, `image_id`, `contact`, `city`, `postalcode`)
VALUES ('1', 'A vendre magnifique 207.. super occasion', '20000.00', '2000', '4', '24', 'Diesel', '50000', 'Manuelle', '1', '75', 'Non', 'Avec permis', 'Voiture en bon etat. Jamais accidentée. Non fumeur', '1', '435345345', 'PARIS', '75014');
INSERT INTO announce (`user_id`, `title`, `price`, `year`, `car_brand_id`, `car_model_id`, `motorisation`, `kilometer`, `transmission`, `car_type_id`, `power`, `condition`, `license`, `description`, `image_id`, `contact`, `city`, `postalcode`)
VALUES ('3', '2022 Audi A4 Premium', 35000.00, 2022, '5', '26', 'Diesel', 15000, 'Automatic', '2', 220, 'Non', 'Avec permis', 'Brand new Audi A4 Premium with low mileage.', 3, '12345678', 'PARIS', 75014);
INSERT INTO announce (`user_id`, `title`, `price`, `year`, `car_brand_id`, `car_model_id`, `motorisation`, `kilometer`, `transmission`, `car_type_id`, `power`, `condition`, `license`, `description`, `image_id`, `contact`, `city`, `postalcode`)
VALUES ('4','2021 Volkswagen Polo TSI', 20000, 2021, '1', '2', 'Diesel', 18000, 'Automatic', '3', 110, 'yes', 'Avec permis','Well-maintained Volkswagen Polo TSI for sale.', 4, '78833032', 'PARIS', 75014);
INSERT INTO announce (`user_id`, `title`, `price`, `year`, `car_brand_id`, `car_model_id`, `motorisation`, `kilometer`, `transmission`, `car_type_id`, `power`, `condition`, `license`, `description`, `image_id`, `contact`, `city`, `postalcode`)
VALUES ('1', 'Volkswagen Polo Comfortline', 16000.00, 2017, '1', '2', 'Essence', 40000, 'Automatique', '1', 95, 'Occasion', 'B', 'Belle Volkswagen Polo Comfortline à vendre. Très bon état.', 5, '12345678', 'Lyon', 69001);
INSERT INTO announce (`user_id`, `title`, `price`, `year`, `car_brand_id`, `car_model_id`, `motorisation`, `kilometer`, `transmission`, `car_type_id`, `power`, `condition`, `license`, `description`, `image_id`, `contact`, `city`, `postalcode`)
VALUES ('2', 'Mercedes-Benz A-Class', 25000.00, 2019, '2', '8', 'Essence', 30000, 'Automatique', '2', 150, 'Occasion', 'B', 'Magnifique Mercedes-Benz A-Class à vendre. Excellent état.', 6, '98765432', 'Marseille', 13007);


-- INSERT INTO `goodeal`.`newsletter` (`email`) VALUES ('othiel.leith@gmail.com');
-- INSERT INTO `goodeal`.`newsletter` (`email`) VALUES ('saima.narat@gmail.com');
-- INSERT INTO `goodeal`.`newsletter` (`email`) VALUES ('salamata@gmail.com');
-- INSERT INTO `goodeal`.`newsletter` (`email`) VALUES ('fatmaitchir@gmail.com');


-- INSERT INTO `goodeal`.`favorite` (`user_id`, `announce_id`) VALUES ('1', '1');


-- INSERT INTO `goodeal`.`message` (`announce_id`, `sender_user_id`, `receiver_user_id`, `message`) VALUES ('1', '1', '2', 'DJFKSDLLFSLDKMFJKSLDUILEZFLKHZDFHLNSDF');
-- INSERT INTO `goodeal`.`message` (`announce_id`, `sender_user_id`, `receiver_user_id`, `message`) VALUES ('1', '3', '4', 'IUITRITERIOVLKXNVNKFD');
