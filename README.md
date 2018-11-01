# reactjs
React Js Blog Website Setup

#Server Url

Server you can setup any server side programming,Here we are setup [laravel 5.7](https://laravel.com/docs/5.7/releases) for api

```sh

Url : [Api Server](https://github.com/pradeep4uhere/blogServer)

```

#More Details [Reference]
[Reference](http://www.mattmorgante.com/technology/dropdown-with-react)


#Image Uploader [Reference]
[Reference](https://www.npmjs.com/package/react-images-uploader)

#Demo
[Reference](https://react.rocks/example/react-trello-board)

#Table Tags
CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `tags`  ADD PRIMARY KEY (`id`);

-- AUTO_INCREMENT for dumped tables

-- AUTO_INCREMENT for table `category`

ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;




#table Category

-- Table structure for table `category`

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Indexes for table `category`

ALTER TABLE `category` ADD PRIMARY KEY (`id`);

-- Table structure for table `users`

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email_address` varchar(100) NOT NULL,
  `password` varchar(225) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;ed tables

ALTER TABLE `category`  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

ALTER TABLE `category` ADD `parent_id` INT NULL AFTER `id`;



#Table User

-- Table structure for table `users`

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email_address` varchar(100) NOT NULL,
  `password` varchar(225) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- Indexes for table `users`
ALTER TABLE `users`  ADD PRIMARY KEY (`id`);


-- AUTO_INCREMENT for table `users`
ALTER TABLE `users`  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;


#table Posts

-- Table structure for table `posts`

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(225) DEFAULT NULL,
  `description` longtext NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


ALTER TABLE `posts`  ADD PRIMARY KEY (`id`);

ALTER TABLE `posts`  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
