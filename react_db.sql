-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 14, 2018 at 06:00 PM
-- Server version: 5.7.23-0ubuntu0.16.04.1
-- PHP Version: 7.1.23-2+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `block`
--

CREATE TABLE `block` (
  `id` int(11) NOT NULL,
  `parent_id` int(11) DEFAULT '0',
  `title` varchar(100) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `block`
--

INSERT INTO `block` (`id`, `parent_id`, `title`, `status`, `created_at`) VALUES
(9, 0, 'Top Headline', 1, NULL),
(10, 0, 'Bollywoods', 1, NULL),
(11, 0, 'India', 1, NULL),
(12, 0, 'World', 1, NULL),
(13, 0, 'Local', 1, NULL),
(14, 0, 'State', 1, NULL),
(15, 0, 'Business', 1, NULL),
(16, 0, 'Money', 1, NULL),
(17, 0, 'Lifestyle', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `block_posts`
--

CREATE TABLE `block_posts` (
  `id` bigint(20) NOT NULL,
  `block_id` bigint(20) NOT NULL,
  `post_id` bigint(20) NOT NULL,
  `status_id` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `title` varchar(100) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `parent_id`, `title`, `status`, `created_at`) VALUES
(75, NULL, 'Breaking News', 1, NULL),
(76, NULL, 'Colleges and Universities', 1, NULL),
(77, NULL, 'Current Events', 1, NULL),
(78, NULL, 'Environmental', 1, NULL),
(79, NULL, 'Government', 1, NULL),
(80, NULL, 'Magazines', 1, NULL),
(81, NULL, 'Newspapers', 1, NULL),
(83, NULL, 'Politics', 1, NULL),
(84, NULL, 'Regional News', 1, NULL),
(85, NULL, 'Religion-and-Spirituality', 0, NULL),
(87, NULL, 'Sports', 1, NULL),
(88, NULL, 'Technology', 1, NULL),
(91, NULL, 'Traffic & Roads', 1, NULL),
(92, NULL, 'Weather', 1, NULL),
(93, NULL, 'Weblogs', 0, NULL),
(95, NULL, 'State', 1, NULL),
(96, NULL, 'City', 1, NULL),
(97, NULL, 'Movies', 1, NULL),
(98, NULL, 'Business', 1, NULL),
(99, NULL, 'World', 1, NULL),
(100, NULL, 'Top Headlines', 1, NULL),
(101, NULL, 'Popular News', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(225) DEFAULT NULL,
  `description` longtext NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `category_id` int(11) NOT NULL,
  `tags` text,
  `status` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `description`, `user_id`, `category_id`, `tags`, `status`, `created_at`, `updated_at`) VALUES
(46, 'In another picture, she is seen sitting with her head bowed down during the puja. “To new beginnings,” Shaleena capt', '<p class="story-details" style="padding: 0px; margin: 0px 30px 0px 100px; float: left; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif; font-size: 14px;"><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px;">ollywood actor&nbsp;<a href="https://www.hindustantimes.com/bollywood/what-deepika-padukone-loves-about-ranveer-singh-here-are-her-5-candid-confessions/story-6ipL0cBn5JwSO64ibocjpM.html" style="padding: 0px; margin: 0px; color: rgb(64, 163, 211); outline: none;">Deepika Padukone</a>&nbsp;seems ready for new beginnings as can be seen in new pictures from a pre-<a href="https://www.hindustantimes.com/bollywood/deepika-padukone-ranveer-singh-to-have-two-weddings-a-sangeet-and-a-party-in-italy-says-report/story-lxMi2vUry3agBR1IWjb8FI.html" style="padding: 0px; margin: 0px; color: rgb(64, 163, 211); outline: none;">wedding</a>&nbsp;puja. She is all set to tie the knot with her boyfriend of six years,&nbsp;<a href="https://www.hindustantimes.com/bollywood/padmavati-is-marrying-khilji-hilarous-deepika-padukone-ranveer-singh-wedding-memes-take-over-internet/story-Nw3TUWEVlbr0zoDwwwdo1N.html" style="padding: 0px; margin: 0px; color: rgb(64, 163, 211); outline: none;">Ranveer Singh</a>&nbsp;in Italy on November 14 and 15.</p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px;">Deepika’s stylist Shaleena Nathani shared pictures of Deepika from the puja on Instagram on Friday. “Love you to the mooon and back. So so so so so sooooo happy for you. Cant wait for it all to starttttt. You deserve all the happiness in the world and more. @deepikapadukone,” Shaleena captioned a photo. In the picture, Deepika is seen in a bright orange Sabyasachi suit. She has her hair tied in a bun and is flashing a big smile, surrounded by her friends.</p><p class="instagram-div" style="padding: 0px; margin: 0px; width: 824.594px; height: 947px;"><iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/BprANWzANPN/embed/captioned/?cr=1&amp;v=12&amp;wp=540&amp;rd=https%3A%2F%2Fwww.hindustantimes.com&amp;rp=%2Fbollywood%2Fdeepika-padukone-ranveer-singh-s-wedding-festivities-kick-off-with-a-puja-see-pics%2Fstory-sJT5cD8AL3ICVnN2CzTrcJ.html#%7B%22ci%22%3A0%2C%22os%22%3A1705.7000000004336%7D" allowtransparency="true" frameborder="0" height="935" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" style="padding: 0px; margin: 0px 0px 12px; width: calc(100% - 2px); display: block; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; max-width: 540px; border-radius: 3px; border-width: 1px; border-style: solid; border-color: rgb(219, 219, 219); box-shadow: none; min-width: 326px; position: relative !important;"></iframe></p><p class="instagram-div" style="padding: 0px; margin: 0px; width: 824.594px; height: 844px;"><iframe class="instagram-media instagram-media-rendered" id="instagram-embed-1" src="https://www.instagram.com/p/Bpqxqh8Hpbg/embed/captioned/?cr=1&amp;v=12&amp;wp=540&amp;rd=https%3A%2F%2Fwww.hindustantimes.com&amp;rp=%2Fbollywood%2Fdeepika-padukone-ranveer-singh-s-wedding-festivities-kick-off-with-a-puja-see-pics%2Fstory-sJT5cD8AL3ICVnN2CzTrcJ.html#%7B%22ci%22%3A1%2C%22os%22%3A1707.8000000001339%7D" allowtransparency="true" frameborder="0" height="832" data-instgrm-payload-id="instagram-media-payload-1" scrolling="no" style="padding: 0px; margin: 0px 0px 12px; width: calc(100% - 2px); display: block; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; max-width: 540px; border-radius: 3px; border-width: 1px; border-style: solid; border-color: rgb(219, 219, 219); box-shadow: none; min-width: 326px; position: relative !important;"></iframe></p><p class="instagram-div" style="padding: 0px; margin: 0px; width: 824.594px; height: 808px;"><iframe class="instagram-media instagram-media-rendered" id="instagram-embed-2" src="https://www.instagram.com/p/BpqynOlFoZO/embed/captioned/?cr=1&amp;v=12&amp;wp=540&amp;rd=https%3A%2F%2Fwww.hindustantimes.com&amp;rp=%2Fbollywood%2Fdeepika-padukone-ranveer-singh-s-wedding-festivities-kick-off-with-a-puja-see-pics%2Fstory-sJT5cD8AL3ICVnN2CzTrcJ.html#%7B%22ci%22%3A2%2C%22os%22%3A1710.0000000009459%7D" allowtransparency="true" frameborder="0" height="796" data-instgrm-payload-id="instagram-media-payload-2" scrolling="no" style="padding: 0px; margin: 0px 0px 12px; width: calc(100% - 2px); display: block; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; max-width: 540px; border-radius: 3px; border-width: 1px; border-style: solid; border-color: rgb(219, 219, 219); box-shadow: none; min-width: 326px; position: relative !important;"></iframe></p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px;">In another picture, she is seen sitting with her head bowed down during the puja. “To new beginnings,” Shaleena captioned the photo. Deepika’s hairstylist Gabriel Georgiou also thanked the Padmaavat actor for making him a part of the celebrations. “Honoured today to witness this #Puja - The beginning of a new chapter,” he captioned a picture.</p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px;">Deepika’s fans thanked Shaleena on her post for sharing their favourite star’s pictures. “Thankuuuuuuuuuuu soooo much for posting thiss picture. Cantt waittt for ittt tooo startttt,” a fan commented. “So happy for u yes this is cry moment for me,” wrote another.</p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px;">Deepika and Ranveer shared their&nbsp;<a href="https://www.hindustantimes.com/bollywood/ranveer-singh-deepika-padukone-confirm-november-wedding-announce-date-on-twitter/story-ewpUHjoRFWn0kB8ndt9uYJ.html" style="padding: 0px; margin: 0px; color: rgb(64, 163, 211); outline: none;">wedding announcement</a>&nbsp;on Twitter on October 21. The announcement was made in Hindi and English and was followed by wishes and congratulations from their Bollywood colleagues.</p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px;">The couple began dating on the sets of Sanjay Leela Bhansali’s Goliyon Ki Rasleela - Ram Leela. They have also worked together in Bajirao Mastani, Padmaavat and Finding Fanny.</p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px;">According to a&nbsp;<a href="https://www.mid-day.com/articles/deepika-padukone-ranveer-singh-to-have-two-weddings-a-sangeet-and-a-party-in-lake-como-italy/19916173" rel="nofollow" style="padding: 0px; margin: 0px; color: rgb(64, 163, 211); outline: none;">report</a>&nbsp;in Mid-Day, Deepika and Ranveer will have two wedding ceremonies. The four-day affair will begin with a sangeet function on November 13. This will be followed by a Kannadiga style wedding on November 14. On November 15, they will tie the knot again, this time as per Anand Karaj rituals.</p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px;">“Since Deepika is a south Indian and Ranveer is of Sindhi-Punjabi origin, the two families decided to follow customs practised by both communities. A south Indian wedding has been planned for November 14, complete with Kannadiga rituals. The next day will see the couple solemnise their relationship as per the customs of a North Indian wedding (Anand Karaj),” a source told the daily.</p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px;">Deepika and Ranveer’s wedding in Italy will be followed by a reception in Bangalore for their extended family and another in Mumbai for their industry colleagues. Deepika’s trousseau for all functions will be designed by Sabyasachi Mukherjee.</p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px;"><span style="padding: 0px; margin: 0px; font-weight: 700;">Follow&nbsp;<a href="https://twitter.com/htshowbiz" rel="nofollow" style="padding: 0px; margin: 0px; color: rgb(64, 163, 211); outline: none;">@htshowbiz</a>&nbsp;for more</span></p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px;"><span class="text-dt" style="padding: 0px; margin: 0px; font-family: &quot;Open Sans&quot;, sans-serif; color: rgb(117, 117, 117); font-size: 12px; text-transform: capitalize;">First Published: Nov 02, 2018 13:16 IST</span></p><span class="text-dt" style="padding: 0px; margin: 0px; font-family: &quot;Open Sans&quot;, sans-serif; color: rgb(117, 117, 117); font-size: 12px; text-transform: capitalize;"><br></span></p>', 15, 98, NULL, 0, NULL, '2018-11-02 09:58:43'),
(57, 'US agrees to let India, 7 other countries keep buying oil from Iran even after sanctions are reimposed', '<p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;"><sup>The US has agreed to let eight countries -- including Japan, India and South Korea -- keep buying Iranian oil after it reimposes sanctions on the OPEC producer on November 5, a senior administration official said.</sup></p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;"><sup>While the Trump administration’s goal remains to choke off revenue to Iran’s economy, waivers are being granted in exchange for continued import cuts so as not to drive up oil prices, said the official, who asked not to be identified before secretary of state Michael Pompeo announces the number of exemptions later on Friday.</sup></p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;"><sup>China – the leading importer of Iranian oil – is still in discussions with the US on terms, but is among the eight, according to two people familiar with the discussions who also asked not to be identified. The other four countries that will get waivers weren’t identified.</sup></p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;"><sup>The administration must maintain a delicate balancing act with the waivers: ensuring the oil market has sufficient supply and avoiding a politically damaging spike in fuel prices, while also ensuring that Iran’s government doesn’t collect enough revenue that the US sanctions become irrelevant.</sup></p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;"><sup>Global benchmark Brent crude has fallen about 15 percent from over $85 a barrel last month on increasing speculation that at least some nations will get waivers, as well as signs that other OPEC members will pump more to offset any supply gap. Oil futures were at $73.04 a barrel at 7:12 am in London on Friday.</sup></p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;"><sup>Previously, Pompeo has said “it is our expectation that the purchases of Iranian crude oil will go to zero from every country or sanctions will be imposed,” but also acknowledged that waivers were being negotiated with nations that say crude from the Middle East producer are critical to their energy industry.</sup></p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;"><span style="padding: 0px; margin: 0px; font-weight: 700;"><sup>Temporary Exemptions</sup></span></p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;"><sup>The waivers are only temporary, and the US will expect countries that get them to keep cutting Iranian imports in the months ahead, according to the US administration official, who declined to give details on the volume of oil the nations will be allowed to buy under the exemptions.</sup></p><p class="exel-size-ads" id="div-gpt-ad-1536739752330-0" style="padding: 0px; margin-top: auto; margin-right: auto; margin-left: auto; width: 728px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif; font-size: 14px; margin-bottom: 20px !important;"><p class="exel-size-ads" id="div-gpt-ad-1536739752330-0" style="padding: 0px; margin-top: auto; margin-right: auto; margin-left: auto; width: 728px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif; font-size: 14px; margin-bottom: 20px !important;"><div class="exel-size-ads" id="div-gpt-ad-1536739752330-0" style="padding: 0px; margin-top: auto; margin-right: auto; margin-left: auto; width: 728px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif; font-size: 14px; margin-bottom: 20px !important;"></div></p></p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;"><sup>The identity of the countries getting waivers is expected to be released officially on Monday, when U.S. restrictions against oil dealings with Iran go back into effect. The Trump administration has asked that those nations also cut other economic ties with the Persian Gulf state, such as by reducing trade in goods that aren’t covered by the sanctions, the official said.</sup></p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;"><sup>The impending oil sanctions have been a US tool to pressure Iran in the six months since President Donald Trump backed out of the 2015 nuclear deal between the Middle East nation and six world powers, saying it didn’t do enough to constrain the Islamic Republic’s nuclear program or curb what the US calls other “malign activity” in the region.</sup></p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;"><span style="padding: 0px; margin: 0px; font-weight: 700;"><sup>Pressure Campaign</sup></span></p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;"><sup>The US move infuriated Iran and angered the other countries that negotiated the nuclear deal and still say it’s the best chance to constrain the Islamic Republic’s nuclear ambitions. The Trump administration has rebuffed them and gone ahead with its sanctions plan, arguing that nations, banks and businesses worldwide will decide they’d rather do business with the US than Iran and leave the market.</sup></p><p class="exel-size-ads" id="div-gpt-ad-1536739752330-1" style="padding: 0px; margin-top: auto; margin-right: auto; margin-left: auto; width: 728px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif; font-size: 14px; margin-bottom: 20px !important;"><p class="exel-size-ads" id="div-gpt-ad-1536739752330-1" style="padding: 0px; margin-top: auto; margin-right: auto; margin-left: auto; width: 728px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif; font-size: 14px; margin-bottom: 20px !important;"><div class="exel-size-ads" id="div-gpt-ad-1536739752330-1" style="padding: 0px; margin-top: auto; margin-right: auto; margin-left: auto; width: 728px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif; font-size: 14px; margin-bottom: 20px !important;"></div></p></p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;"><sup>Already, through its pressure campaign, the US has managed to reduce Iran’s oil exports from 2.7 million to 1.6 million barrels a month, according to internal US estimates.</sup></p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;"><sup>That’s symbolically important to the Trump administration because President Barack Obama’s administration took three years to remove 1.2 million barrels from the market -- and that was while acting in concert with the European Union and other nations before the international effort yielded the 2015 deal.</sup></p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;"><sup>The administration’s decision to issue waivers to eight countries also marked a significant reduction from the Obama administration, which issued such exemptions to 20 countries over three years. During the previous round of sanctions, nations were expected to cut imports by about 20 percent during each 180-day review period to get another exemption.</sup></p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;"><span style="padding: 0px; margin: 0px; font-weight: 700;"><sup>Confident US</sup></span></p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;"><sup>“We’re quite confident moving forward that the actions that are being taken are going to help us exert maximum pressure against the Iranian regime,” deputy State Department spokesman Robert Palladino said at a briefing on Thursday. “This leading state sponsor of terrorism is going to see revenues cut off significantly that will deprive it of its ability to fund terrorism throughout the region.”</sup></p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;"><sup>Countries that get waivers under the revived sanctions must pay for the oil into escrow accounts in their local currency. That means the money won’t directly go to Iran, which can only use it to buy food, medicine or other non-sanctioned goods from its crude customers. The administration sees those accounts as an important way of limiting Iranian revenue and further constraining its economy.</sup></p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;"><sup>“It’s a virtual certainty that Western banks are not going to violate the escrow restrictions,” said Mark Dubowitz, the chief executive of the Washington-based Foundation for Defense of Democracies who has advised Pompeo. “The message they’re sending is don’t screw around with these escrow accounts and try to get cute.”</sup></p>', 15, 79, NULL, 0, NULL, '2018-11-02 10:17:32'),
(58, 'Paytm registers 600% growth in UPI transactions in 6 months', '<p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;">Alibaba and SoftBank-backed Paytm on Friday said it witnessed 600 % growth in the Unified Payments Interface (UPI) transactions in the last six months.</p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;">One97 Communications Limited, that owns the brand Paytm in India, said the platform registered over 179 million UPI transactions in October.</p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;">“It is encouraging to see the widespread adoption of Paytm BHIM UPI for various services such as mobile recharges, electricity and water bills, metro commute and also at the offline stores,” said Deepak Abbot, Senior Vice President, Paytm.</p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;">In September, Paytm had registered over 137 million UPI transactions, becoming the leading contributor to Unified Payments Interface (UPI) payments with over 33 per cent of the overall market share.</p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;">The company said that 50 % of all utility payments are being made using Paytm UPI.</p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;">Over six million offline merchants out of its 9.5 million offline merchant-base accept Paytm UPI for various purchases.</p><p style="padding: 0px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; font-size: 20px; line-height: 32px; color: rgb(33, 33, 33); font-family: &quot;PT Serif&quot;, serif;">With this, Paytm has over 80 % share of all offline merchant transactions being conducted on UPI.</p>', 15, 98, NULL, 0, NULL, '2018-11-02 10:18:45'),
(68, 'Movies', 'dasdasd', 15, 98, NULL, 0, NULL, '2018-11-02 12:20:45'),
(73, 'After Airware\'s Demise, Consolidation Looms For The Commercial Drone Industry', '<p class="speakable-paragraph" style="margin: 1.2rem 0px; font-family: Georgia, Cambria, &quot;Times New Roman&quot;, Times, serif; font-size: 18px; font-variant-ligatures: common-ligatures; background-color: rgb(252, 252, 252);"><img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fphilipfinnegan%2Ffiles%2F2018%2F10%2FAirwareMining-1-1200x800.jpg" style="background-color: rgb(255, 255, 255); font-size: 12px; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;" alt="">The fortune of Australia\'s richest person,&nbsp;<a href="https://www.forbes.com/profile/gina-rinehart/#36664d752db7" target="_self" data-ga-track="InternalLink:https://www.forbes.com/profile/gina-rinehart/#36664d752db7" style="cursor: pointer; color: rgb(0, 56, 145); -webkit-tap-highlight-color: transparent;">Gina Rinehart</a>, continues to grow with her primary business reporting a 28% increase in net profit to $961 million in the year to June 30.</p><p style="margin: 1.2rem 0px; font-family: Georgia, Cambria, &quot;Times New Roman&quot;, Times, serif; font-size: 18px; font-variant-ligatures: common-ligatures; background-color: rgb(252, 252, 252);">Hancock Prospecting, which is named after her late father, Lang Hancock, generated most of its profit from the sale of iron ore mined in several projects in Western Australia. The company also has extensive farming interests and has started to expand into the international mining industry.</p><p style="margin: 1.2rem 0px; font-family: Georgia, Cambria, &quot;Times New Roman&quot;, Times, serif; font-size: 18px; font-variant-ligatures: common-ligatures; background-color: rgb(252, 252, 252);">Mrs. Rinehart, who is estimated by Forbes to be worth $16.8 billion and is 69th on the global billionaires list, said in a report filed on Hancock Prospecting\'s website that revenue in the latest 12-month period was up 36% to $4.23 billion with a strong contribution from the majority owned Roy Hill mine which is producing 55 million tons of high-grade iron ore a year.</p><p style="margin: 1.2rem 0px; font-family: Georgia, Cambria, &quot;Times New Roman&quot;, Times, serif; font-size: 18px; font-variant-ligatures: common-ligatures; background-color: rgb(252, 252, 252);"><fbs-ad position="inread" progressive="" ad-id="article-0-inread" aria-hidden="true" role="presentation"></fbs-ad></p><p id="article-0-inread"><p id="article-0-inread"><div id="article-0-inread"></div></p></p><p style="margin: 1.2rem 0px; font-family: Georgia, Cambria, &quot;Times New Roman&quot;, Times, serif; font-size: 18px; font-variant-ligatures: common-ligatures; background-color: rgb(252, 252, 252);">Three other mines, which are half-owned by the mining giant, Rio Tinto, and operate as the Hope Downs series of projects, continued to produce at more than their design capacity of 45m/t a year. A fourth Hope Downs mine named Baby Hope has just started.</p>', 15, 98, '[{"id":15,"name":"Success"},{"id":16,"name":"Success"}]', 0, NULL, '2018-11-02 12:39:59'),
(75, 'The bypoll results are also seen an indicator of people’s mood ahead of the 2019 Lok Sabha elections', '<p><font color="#212529" face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"><strong>The bypoll results are also seen an indicator of people’s mood ahead of the 2019 Lok Sabha elections</strong></font></p><p><font color="#212529" face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji">The results for three Lok Sabha seats -&nbsp; Shivamogga, Ballari and Mandya - and two assembly constituencies - Jamkhandi and Ramanagaram - in Karnataka that went to the polls on Saturday, will be declared today.</font></p><p><font color="#212529" face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"><br></font></p><p><font color="#212529" face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji">The results are being seen not just as an indicator of people’s mood ahead of the 2019 Lok Sabha elections, but also as something that may have a bearing on the stability of the Congress-JD(S) coalition. This is even though the results, technically, cannot bring down the government by affecting its numerical strength.</font></p><p><font color="#212529" face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"><br></font></p><p><font color="#212529" face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji">A total of 31 candidates were in the fray from all the five constituencies, though the contest is mainly between the Congress-JDS combine and the BJP.</font></p>', 15, 98, '[{"id":37,"name":"dasdasd"},{"id":16,"name":"Success"}]', 0, NULL, '2018-11-06 06:03:59'),
(76, 'The bypoll results are also seen an indicator of people’s mood ahead of the 2019 Lok Sabha elections', '<p><img src="https://i10.dainikbhaskar.com/thumbnails/730x548/web2images/www.bhaskar.com/2018/09/04/binny-bansal_lt.jpg" alt=""><font color="#212529" face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"><strong><br></strong></font></p><p><font color="#212529" face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"><strong>The bypoll results are also seen an indicator of people’s mood ahead of the 2019 Lok Sabha elections</strong></font></p><p><font color="#212529" face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji">The results for three Lok Sabha seats -&nbsp; Shivamogga, Ballari and Mandya - and two assembly constituencies - Jamkhandi and Ramanagaram - in Karnataka that went to the polls on Saturday, will be declared today.</font></p><p><font color="#212529" face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"><br></font></p><p><font color="#212529" face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji">The results are being seen not just as an indicator of people’s mood ahead of the 2019 Lok Sabha elections, but also as something that may have a bearing on the stability of the Congress-JD(S) coalition. This is even though the results, technically, cannot bring down the government by affecting its numerical strength.</font></p><p><font color="#212529" face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"><br></font></p><p><font color="#212529" face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji">A total of 31 candidates were in the fray from all the five constituencies, though the contest is mainly between the Congress-JDS combine and the BJP.</font></p>', 15, 101, '[{"id":37,"name":"dasdasd"},{"id":16,"name":"Success"}]', 1, NULL, '2018-11-14 09:36:05'),
(77, 'our viewers are interested in your website is to attract their attention right from ', '<span style="color: rgb(51, 51, 51); font-family: Raleway, Helvetica, Arial, sans-serif; font-size: 16px;"><br></span><p><img src="https://i10.dainikbhaskar.com/thumbnails/730x548/web2images/www.bhaskar.com/2018/11/14/0521_1_56.jpg" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;" alt=""><span style="color: rgb(51, 51, 51); font-family: Raleway, Helvetica, Arial, sans-serif; font-size: 16px;">our viewers are interested in your website is to attract their attention right from&nbsp;</span><span style="font-size: 16px;">our viewers are interested in your website is to attract their attention right from</span><span style="font-size: 16px;">&nbsp;</span><span style="font-size: 16px;">our viewers are interested in your website is to attract their attention right from</span><span style="font-size: 16px;">&nbsp;</span><span style="font-size: 16px;">our viewers are interested in your website is to attract their attention right from</span><span style="font-size: 16px;">&nbsp;</span><span style="font-size: 16px;">our viewers are interested in your website is to attract their attention right from</span><span style="font-size: 16px;">&nbsp;</span><span style="font-size: 16px;">our viewers are interested in your website is to attract their attention right from</span><span style="font-size: 16px;">&nbsp;</span><span style="font-size: 16px;">our viewers are interested in your website is to attract their attention right from</span><span style="font-size: 16px;">&nbsp;</span><span style="font-size: 16px;">our viewers are interested in your website is to attract their attention right from</span><span style="font-size: 16px;">&nbsp;</span><span style="font-size: 16px;">our viewers are interested in your website is to attract their attention right from</span><span style="font-size: 16px;">&nbsp;</span><span style="font-size: 16px;">our viewers are interested in your website is to attract their attention right from</span><span style="font-size: 16px;">&nbsp;</span><span style="font-size: 16px;">our viewers are interested in your website is to attract their attention right from</span><span style="font-size: 16px;">&nbsp;</span><span style="font-size: 16px;">our viewers are interested in your website is to attract their attention right from</span><span style="font-size: 16px;">&nbsp;</span><span style="font-size: 16px;">our viewers are interested in your website is to attract their attention right from</span><span style="font-size: 16px;">&nbsp;</span><span style="font-size: 16px;">our viewers are interested in your website is to attract their attention right from</span><span style="font-size: 16px;">&nbsp;</span><span style="font-size: 16px;">our viewers are interested in your website is to attract their attention right from</span><span style="font-size: 16px;">&nbsp;vvvvv</span></p><p><span style="font-size: 16px;"><br></span><span style="font-size: 16px;"><br></span><span style="color: rgb(51, 51, 51); font-family: Raleway, Helvetica, Arial, sans-serif; font-size: 16px;">our viewers are interested in your website is to attract their attention right from&nbsp;</span><span style="font-size: 16px;">our viewers are interested in your website is to attract their attention right from</span><span style="font-size: 16px;">&nbsp;</span><span style="font-size: 16px;">our viewers are interested in your website is to attract their attention right from</span><span style="font-size: 16px;">&nbsp;</span><span style="font-size: 16px;"><br></span></p>', 15, 101, '[{"id":37,"name":"dasdasd"}]', 1, NULL, '2018-11-14 09:27:00'),
(78, 'The bypoll results are also seen an indicator of people’s mood ahead of the 2019 Lok Sabha electionsdasdasddads', '<p><font color="#212529" face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"><strong>The bypoll results are also seen an indicator of people’s mood ahead of the 2019 Lok Sabha elections</strong></font></p><p><font color="#212529" face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji">The results for three Lok Sabha seats -&nbsp; Shivamogga, Ballari and Mandya - and two assembly constituencies - Jamkhandi and Ramanagaram - in Karnataka that went to the polls on Saturday, will be declared today.</font></p><p><font color="#212529" face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"><br></font></p><p><font color="#212529" face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji">The results are being seen not just as an indicator of people’s mood ahead of the 2019 Lok Sabha elections, but also as something that may have a bearing on the stability of the Congress-JD(S) coalition. This is even though the results, technically, cannot bring down the government by affecting its numerical strength.</font></p><p><font color="#212529" face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"><br></font></p><p><font color="#212529" face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji">A total of 31 candidates were in the fray from all the five constituencies, though the contest is mainly between the Congress-JDS combine and the BJP.</font></p>', 15, 100, '[{"id":37,"name":"dasdasd"}]', 1, NULL, '2018-11-13 10:58:40'),
(79, 'Flipkart group CEO Binny Bansal resigns due to allegations ', '<img src="https://i10.dainikbhaskar.com/thumbnails/730x548/web2images/www.bhaskar.com/2018/11/14/0521_harish_meena.jpg" alt=""><br><p style="margin: 0px; padding: 0px; border: 0px; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; font-size: 10.001px; line-height: inherit; font-family: arial; vertical-align: baseline; text-size-adjust: none; color: rgb(0, 0, 0);">"His decision follows an independent investigation done on behalf of Flipkart and Walmart into an allegation of\nserious personal misconduct. He strongly denies the allegation. Nevertheless, we had a responsibility to ensure the\ninvestigation was deliberate and thorough. While the investigation did not find evidence to corroborate the\ncomplainant’s assertions against Binny, it did reveal other lapses in judgement, particularly a lack of transparency,<br></p><p style="margin: 0px; padding: 0px; border: 0px; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; font-size: 10.001px; line-height: inherit; font-family: arial; vertical-align: baseline; text-size-adjust: none; color: rgb(0, 0, 0);">"His decision follows an independent investigation done on behalf of Flipkart and Walmart into an allegation of\nserious personal misconduct. He strongly denies the allegation. Nevertheless, we had a responsibility to ensure the\ninvestigation was deliberate and thorough. While the investigation did not find evidence to corroborate the\ncomplainant’s assertions against Binny, it did reveal other lapses in judgement, particularly a lack of transparency,<br></p><br><br><p style="margin: 0px; padding: 0px; border: 0px; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; font-size: 10.001px; line-height: inherit; font-family: arial; vertical-align: baseline; text-size-adjust: none; color: rgb(0, 0, 0);">"His decision follows an independent investigation done on behalf of Flipkart and Walmart into an allegation of\nserious personal misconduct. He strongly denies the allegation. Nevertheless, we had a responsibility to ensure the\ninvestigation was deliberate and thorough. While the investigation did not find evidence to corroborate the\ncomplainant’s assertions against Binny, it did reveal other lapses in judgement, particularly a lack of transparency,<br></p><br><br><p style="margin: 0px; padding: 0px; border: 0px; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; font-size: 10.001px; line-height: inherit; font-family: arial; vertical-align: baseline; text-size-adjust: none; color: rgb(0, 0, 0);">"His decision follows an independent investigation done on behalf of Flipkart and Walmart into an allegation of\nserious personal misconduct. He strongly denies the allegation. Nevertheless, we had a responsibility to ensure the\ninvestigation was deliberate and thorough. While the investigation did not find evidence to corroborate the\ncomplainant’s assertions against Binny, it did reveal other lapses in judgement, particularly a lack of transparency,<br></p><br><br><p style="margin: 0px; padding: 0px; border: 0px; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; font-size: 10.001px; line-height: inherit; font-family: arial; vertical-align: baseline; text-size-adjust: none; color: rgb(0, 0, 0);">"His decision follows an independent investigation done on behalf of Flipkart and Walmart into an allegation of\nserious personal misconduct. He strongly denies the allegation. Nevertheless, we had a responsibility to ensure the\ninvestigation was deliberate and thorough. While the investigation did not find evidence to corroborate the\ncomplainant’s assertions against Binny, it did reveal other lapses in judgement, particularly a lack of transparency,<br></p>', 15, 100, '[]', 1, NULL, '2018-11-14 08:44:12'),
(80, 'Deepika, Ranveer get married in Konkani ceremony in Italy', '<img src="https://assets.inshorts.com/inshorts/images/v1/variants/jpg/s/2018/11_nov/14_wed/img_1542190635861_598.jpg?resize=400px:*" alt=""><span style="color: rgb(68, 68, 77); font-family: Roboto, sans-serif; font-size: 16px;"><br></span><p><span style="color: rgb(68, 68, 77); font-family: Roboto, sans-serif; font-size: 16px;">Deepika Padukone and Ranveer Singh got married in a traditional Konkani wedding ceremony at Lake Como, Italy on Wednesday, as per ANI. The couple, who has been dating for six years, will reportedly have another wedding ceremony on Thursday as per Sindhi customs. Reports added that they will host two receptions in Bengaluru and Mumbai following their wedding.</span></p>', 15, 100, '[]', 0, NULL, '2018-11-14 10:50:24'),
(81, 'Spinner once bowled 20 overs in an innings without conceding a run', '<img src="https://assets.inshorts.com/inshorts/images/v1/variants/jpg/s/2018/11_nov/14_wed/img_1542185463461_347.jpg?resize=400px:*" alt=""><span style="color: rgb(68, 68, 77); font-family: Roboto, sans-serif; font-size: 16px;"><br></span><p><span style="color: rgb(68, 68, 77); font-family: Roboto, sans-serif; font-size: 16px;">Former Madhya Pradesh left-arm spinner Manish Majithia bowled 20 overs and took a wicket without conceding a run in the second innings against Railways in a Ranji Trophy match on November 14, 1999. In the first innings, Majithia had registered figures of 12.3-9-3-1. On the last day, Railways scored only 83 runs from 104 overs to manage a draw</span></p>', 15, 101, '[]', 0, NULL, '2018-11-14 10:51:20'),
(82, 'Karan Johar apologises for mocking Northeast culture on reality show', '<p><img src="https://assets.inshorts.com/inshorts/images/v1/variants/jpg/s/2018/11_nov/14_wed/img_1542182253978_807.jpg?resize=400px:*" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;" alt=""></p><p><span style="color: rgb(68, 68, 77); font-family: Roboto, sans-serif; font-size: 16px;">Filmmaker Karan Johar has apologised for sharing a video on Instagram from \'India\'s Got Talent 6\' sets where he was seen mocking Kirron Kher for wearing a spiked bamboo Arunachalee hat. After he was criticised, Johar tweeted, "I\'d like to apologise...It was purely unintentional and came from a place of no knowledge." He added he has also deleted the video.</span></p>', 15, 97, '[]', 0, NULL, '2018-11-14 10:52:29'),
(83, 'Deepika\'s sister changes social media name to #Ladkiwale for wedding', '<img src="https://assets.inshorts.com/inshorts/images/v1/variants/jpg/s/2018/11_nov/14_wed/img_1542185672550_58.jpg?resize=400px:*" alt=""><span style="color: rgb(68, 68, 77); font-family: Roboto, sans-serif; font-size: 16px;"><br></span><p><span style="color: rgb(68, 68, 77); font-family: Roboto, sans-serif; font-size: 16px;">Actress Deepika Padukone\'s sister Anisha Padukone changed her name to \'#Ladkiwale\' on social media ahead of Deepika\'s wedding to Ranveer Singh. Deepika and Ranveer will reportedly have a Konkani wedding on Wednesday and another wedding on Thursday, which will be according to Sindhi customs. The couple will get married at Lake Como, Italy</span></p>', 15, 97, '[]', 0, NULL, '2018-11-14 10:59:51'),
(84, 'Apple design head to create ring made entirely out of diamond', '<img src="https://assets.inshorts.com/inshorts/images/v1/variants/jpg/s/2018/11_nov/13_tue/img_1542124450394_910.jpg?resize=400px:*" alt=""><p><font color="#212529" face="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"><br></font><p><span style="color: rgb(68, 68, 77); font-family: Roboto, sans-serif; font-size: 16px;">Jony Ive, Apple\'s Chief Design Officer, has created a ring with industrial designer Marc Newson, made entirely out of a lab-made diamond. The diamond block will be faceted with several thousand facets, some of which are as small as several hundred micrometers. The ring will go up for auction at Sotheby\'s (RED) Auction to raise money for HIV/AIDS programs.</span></p></p>', 15, 88, '[]', 0, NULL, '2018-11-14 11:03:53');

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `title`, `status`, `created_at`) VALUES
(9, 'Success', 1, NULL),
(10, 'Success', 1, NULL),
(11, 'Success', 1, NULL),
(12, 'Success', 1, NULL),
(13, 'Success', 1, NULL),
(14, 'Success', 1, NULL),
(15, 'Success', 1, NULL),
(16, 'Success', 1, NULL),
(33, 'dasdasddasdsa', 1, NULL),
(35, 'dasdasd', 1, NULL),
(36, 'dasdasd', 1, NULL),
(37, 'dasdasd', 1, NULL),
(38, 'dasdasd', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email_address` varchar(100) NOT NULL,
  `password` varchar(225) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email_address`, `password`, `created_at`) VALUES
(1, 'Pradeep', 'Kumar', 'pradeep.kumar@aimbeyond.com', 'sdasd', '2018-11-12 09:49:01'),
(2, 'dasda', 'sdasd', 'asda', 'sdasd', '2018-10-23 12:48:52'),
(3, 'dasda', 'sdasd', 'asda', 'sdasd', '2018-10-23 12:48:53'),
(4, 'dasda', 'sdasd', 'asda', 'sdasd', '2018-10-23 12:48:53'),
(5, 'dasda', 'sdasd', 'asda', 'sdasd', '2018-10-23 12:49:14'),
(6, 'dasda', 'sdasd', 'asda', 'sdasd', '2018-10-23 12:49:27'),
(7, 'dasda', 'sdasd', 'asda', 'sdasd', '2018-10-23 12:52:19'),
(8, 'dasda', 'sdasd', 'asda', 'sdasd', '2018-10-23 12:52:25'),
(9, 'dasda', 'sdasd', 'asda', 'sdasd', '2018-10-23 12:52:26'),
(10, 'dasda', 'sdasd', 'asda', 'sdasd', '2018-10-23 12:52:26'),
(11, 'dasda', 'sdasd', 'asda', 'sdasd', '2018-10-23 12:52:28'),
(12, 'dasda', 'sdasd', 'asda', 'sdasd', '2018-10-23 12:52:29'),
(13, 'dasda', 'sdasd', 'asda', 'sdasd', '2018-10-23 12:52:45'),
(14, 'dasda', 'sdasd', 'asda', '6c0cbf5029aed0af395ac4b864c6b095', '2018-10-23 12:53:03'),
(15, 'Pradeep', 'Kumar', 'pradeep@gmail.com', 'febc8f8ac083f5fc27e032c81e7b536a', '2018-10-23 12:54:09'),
(16, 'dasd', 'dasd', 'dad', 'df3939f11965e7e75dbc046cd9af1c67', '2018-10-23 12:57:43'),
(17, 'dasda', 'sdasd', 'asdas', '196b0f14eba66e10fba74dbf9e99c22f', '2018-10-23 12:58:58'),
(18, 'dasd', 'asd', 'dasds', '07304e56c452be73ad2b51a4647d0300', '2018-10-23 12:59:46'),
(19, 'Raj', 'Kumar', 'raj@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', '2018-10-25 05:26:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `block`
--
ALTER TABLE `block`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `block_posts`
--
ALTER TABLE `block_posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `block`
--
ALTER TABLE `block`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `block_posts`
--
ALTER TABLE `block_posts`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;
--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;
--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
