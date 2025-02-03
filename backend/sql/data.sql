INSERT INTO customers (customer_id, first_name, last_name, email, phone, address, registration_date)
VALUES
(1, 'John', 'Doe', 'john.doe@example.com', '555-1234', '123 Main St', '2022-01-01'),
(2, 'Jane', 'Smith', 'jane.smith@example.com', '555-5678', '456 Oak St', '2022-02-01'),
(3, 'Alice', 'Brown', 'alice.brown@example.com', '555-9876', '789 Pine St', '2022-03-01'),
(4, 'Charlie', 'Johnson', 'charlie.johnson@example.com', '555-2468', '101 Elm St', '2022-04-01'),
(5, 'Emily', 'White', 'emily.white@example.com', '555-1357', '202 Birch St', '2022-05-01'),
(6, 'David', 'Green', 'david.green@example.com', '555-8642', '303 Cedar St', '2022-06-01'),
(7, 'Sophia', 'Hall', 'sophia.hall@example.com', '555-7531', '404 Maple St', '2022-07-01'),
(8, 'Michael', 'Adams', 'michael.adams@example.com', '555-9875', '505 Spruce St', '2022-08-01'),
(9, 'Olivia', 'Clark', 'olivia.clark@example.com', '555-4567', '606 Willow St', '2022-09-01'),
(10, 'Liam', 'Lee', 'liam.lee@example.com', '555-3219', '707 Cherry St', '2022-10-01'),
(11, 'Mason', 'Lewis', 'mason.lewis@example.com', '555-8520', '808 Oak St', '2022-11-01'),
(12, 'Sophia', 'Walker', 'sophia.walker@example.com', '555-7532', '909 Walnut St', '2022-12-01'),
(13, 'Lucas', 'Young', 'lucas.young@example.com', '555-6548', '100 Pine St', '2023-01-01'),
(14, 'Ethan', 'King', 'ethan.king@example.com', '555-9517', '111 Maple St', '2023-02-01'),
(15, 'Bob', 'Williams', 'bob.williams@example.com', '555-5555', '555 Cedar St', '2022-05-01');


INSERT INTO products (product_id, product_name, price, category)
VALUES
(1, 'Laptop', 1000.00, 'Electronics'),
(2, 'Smartphone', 500.00, 'Electronics'),
(3, 'Headphones', 150.00, 'Electronics'),
(4, 'Tablet', 300.00, 'Electronics'),
(5, 'Monitor', 200.00, 'Electronics'),
(6, 'Keyboard', 50.00, 'Electronics'),
(7, 'Mouse', 30.00, 'Electronics'),
(8, 'Printer', 150.00, 'Electronics'),
(9, 'Camera', 600.00, 'Electronics'),
(10, 'Smartwatch', 250.00, 'Electronics'),
(11, 'Gaming Console', 400.00, 'Electronics'),
(12, 'Router', 120.00, 'Electronics'),
(13, 'Speaker', 180.00, 'Electronics'),
(14, 'Drone', 800.00, 'Electronics'),
(15, 'Fitness Tracker', 100.00, 'Electronics');


INSERT INTO orders (order_id, customer_id, product_id, order_date, total_amount)
VALUES
(1, 1, 1, '2023-01-05', 1000.00),
(2, 2, 2, '2023-02-10', 500.00),
(3, 3, 3, '2023-03-15', 150.00),
(4, 4, 4, '2023-04-20', 300.00),
(5, 5, 5, '2023-05-25', 200.00),
(6, 6, 6, '2023-06-30', 50.00),
(7, 7, 7, '2023-07-01', 30.00),
(8, 8, 8, '2023-08-10', 150.00),
(9, 9, 9, '2023-09-15', 600.00),
(10, 10, 10, '2023-10-20', 250.00),
(11, 11, 11, '2023-11-05', 400.00),
(12, 12, 12, '2023-12-15', 120.00),
(13, 13, 13, '2024-01-25', 180.00),
(14, 14, 14, '2024-02-10', 800.00),
(15, 15, 15, '2024-03-05', 100.00);


INSERT INTO sales (sale_id, order_id, product_id, quantity, sale_date)
VALUES
(1, 1, 1, 1, '2023-01-06'),
(2, 2, 2, 1, '2023-02-11'),
(3, 3, 3, 2, '2023-03-16'),
(4, 4, 4, 1, '2023-04-21'),
(5, 5, 5, 2, '2023-05-26'),
(6, 6, 6, 1, '2023-07-01'),
(7, 7, 7, 3, '2023-07-02'),
(8, 8, 8, 1, '2023-08-11'),
(9, 9, 9, 2, '2023-09-16'),
(10, 10, 10, 1, '2023-10-21'),
(11, 11, 11, 2, '2023-11-06'),
(12, 12, 12, 1, '2023-12-16'),
(13, 13, 13, 1, '2024-01-26'),
(14, 14, 14, 1, '2024-02-11'),
(15, 15, 15, 1, '2024-03-06');


INSERT INTO order_items (order_item_id, order_id, product_id, quantity, unit_price, total_price, discount)
VALUES
(1, 1, 1, 1, 1000.00, 1000.00, 0.00),
(2, 2, 2, 1, 500.00, 500.00, 0.00),
(3, 3, 3, 2, 150.00, 300.00, 10.00),
(4, 4, 4, 1, 300.00, 300.00, 0.00),
(5, 5, 5, 2, 200.00, 400.00, 5.00),
(6, 6, 6, 1, 50.00, 50.00, 0.00),
(7, 7, 7, 3, 30.00, 90.00, 2.00),
(8, 8, 8, 1, 150.00, 150.00, 0.00),
(9, 9, 9, 2, 600.00, 1200.00, 15.00),
(10, 10, 10, 1, 250.00, 250.00, 0.00),
(11, 11, 11, 2, 400.00, 800.00, 20.00),
(12, 12, 12, 1, 120.00, 120.00, 0.00),
(13, 13, 13, 1, 180.00, 180.00, 0.00),
(14, 14, 14, 1, 800.00, 800.00, 30.00),
(15, 15, 15, 1, 100.00, 100.00, 0.00);



INSERT INTO categories (category_id, category_name, description)
VALUES
(1, 'Electronics', 'Devices related to technology and gadgets.'),
(2, 'Home Appliances', 'Appliances used in home settings.'),
(3, 'Furniture', 'Household furniture items.'),
(4, 'Clothing', 'Apparel and clothing items.'),
(5, 'Footwear', 'Shoes and other foot-related products.'),
(6, 'Beauty Products', 'Cosmetics and beauty-related products.'),
(7, 'Books', 'Different genres of books and literature.'),
(8, 'Toys', 'Children’s toys and games.'),
(9, 'Groceries', 'Food items and general groceries.'),
(10, 'Sports Equipment', 'Items related to sports and fitness.'),
(11, 'Stationery', 'Office and school stationery.'),
(12, 'Pet Supplies', 'Products for pets and animals.'),
(13, 'Jewelry', 'Fashion and fine jewelry items.'),
(14, 'Automotive', 'Automobile-related products.'),
(15, 'Health & Fitness', 'Health and fitness-related products.');