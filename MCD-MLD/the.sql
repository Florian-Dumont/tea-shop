CREATE DATABASE IF NOT EXISTS `THÉS` DEFAULT CHARACTER SET UTF8MB4 COLLATE utf8mb4_unicode_ci;
USE `THÉS`;

CREATE TABLE `CATÉGORIE` (
  `id` INT(42) AUTO_INCREMENT,
  `label` VARCHAR(255),
  `description` VARCHAR(255),
  `url_image` VARCHAR(255),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE `COMMANDE` (
  `id` INT(42) AUTO_INCREMENT,
  `total_amount` VARCHAR(255),
  `order_date` VARCHAR(42),
  `utilisateur_id` INT(42),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE `INCLURE` (
  `commande_id` INT(42), 
  `the_id` INT(42),
  `quantity` VARCHAR(42),
  `ref_product` VARCHAR(42),
  PRIMARY KEY (`commande_id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE `LIER` (
  `the_id` INT(42),
  `packaging_id` INT(42),
  `ref` VARCHAR(42),
  `price` DECIMAL(6,2),
  PRIMARY KEY (`the_id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE `NOTER` (
  `utilisateur_id` INT(42),
  `the_id` INT(42),
  `vote_count` VARCHAR(42),
  PRIMARY KEY (`utilisateur_id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE `PACKAGING` (
  `id` INT(42) AUTO_INCREMENT,
  `package` VARCHAR(42),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE `THÉ` (
  `id` INT(42)AUTO_INCREMENT,
  `label_1` VARCHAR(255),
  `label_2` VARCHAR(255),
  `description` VARCHAR(255),
  `url_tea` VARCHAR(42),
  `url_image` VARCHAR(42),
  `vote_average` VARCHAR(42),
  `our_favorite` TINYINT(42),
  `categorie_id` INT(42),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE `UTILISATEUR` (
  `id` INT(42)AUTO_INCREMENT,
  `label` VARCHAR(255),
  `email` VARCHAR(42),
  `password` VARCHAR(42),
  `role` VARCHAR(42),
  `created_at` VARCHAR(42),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

ALTER TABLE COMMANDE ADD FOREIGN KEY (utilisateur_id) REFERENCES UTILISATEUR (id);
ALTER TABLE INCLURE ADD FOREIGN KEY (the_id) REFERENCES THÉ (id);
ALTER TABLE INCLURE ADD FOREIGN KEY (commande_id) REFERENCES COMMANDE (id);
ALTER TABLE LIER ADD FOREIGN KEY (packaging_id) REFERENCES PACKAGING (id);
ALTER TABLE LIER ADD FOREIGN KEY (the_id) REFERENCES THÉ (id);
ALTER TABLE NOTER ADD FOREIGN KEY (the_id) REFERENCES THÉ (id);
ALTER TABLE NOTER ADD FOREIGN KEY (utilisateur_id) REFERENCES UTILISATEUR (id);
ALTER TABLE THÉ ADD FOREIGN KEY (categorie_id) REFERENCES CATÉGORIE (id);