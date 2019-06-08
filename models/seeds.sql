USE buyallyDB;

INSERT INTO `buyallydb`.`users` (`id`, `username`, `password`, `createdAt`, `updatedAt`) VALUES ('1', 'Sam', 'sam123', '06/07/19', '06/07/19'),('2', 'Monali', 'mn999', '06/07/19', '06/07/19'),('3', 'Ankita', 'ankita', '06/08/19', '06/08/19'),('4', 'Dan', '1111', '06/08/19', '06/08/19');

INSERT INTO `buyallydb`.`categories` (`categoryname`, `createdAt`, `updatedAt`) VALUES ('Sports', '06/07/19', '06/07/19'),('Outdoor', '06/07/19', '06/07/19'),('Casual', '06/07/19', '06/07/19'),('Formal', '06/08/19', '06/08/19'),('Semiformal', '06/08/19', '06/08/19'),('Festive', '06/08/19', '06/08/19'),('Business Formal', '06/08/19', '06/08/19'),('Business Formal', '06/08/19', '06/08/19'),('Accessories', '06/08/19', '06/08/19');

INSERT INTO `buyallydb`.`posts` (`id`, `name`, `review`, `picture`, `price`, `brand`, `url`, `createdAt`, `updatedAt`, `CategoryId`, `UserId`) VALUES ('1', 'test', 'love it', ?, '100', 'xxx', 'https://www.indochino.com/product/newton-blue-suit?currency=USD&utm_source=google&utm_medium=cpc&utm_campaign=768964681&gclid=CjwKEAjwue3nBRCCyrqY0c7bw2wSJACSlmGZjPDn2y1TzenQqcOEFxU_1gePWyAnJpmocm-UcIvishoCTMXw_wcB', '06/07/19', '06/07/19', '3', '2');
