-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 16, 2023 lúc 10:03 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `nguyenhoangvu_cdtt`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `brand`
--

CREATE TABLE `brand` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `metakey` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `brand`
--

INSERT INTO `brand` (`id`, `name`, `slug`, `image`, `sort_order`, `metakey`, `description`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'gundam', 'gundam', 'gundam.png', 1, 'gundam', 'afafas', NULL, '2023-10-24 20:32:18', 1, 1, 1),
(3, 'Robotime', 'robotime', 'robotime.png', 0, 'Robotime', 'abc', '2023-10-24 20:18:45', '2023-10-24 20:18:45', 1, NULL, 1),
(7, 'abc', '', NULL, 0, 'abc', 'abc', NULL, '2023-11-15 23:13:20', 1, NULL, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `description` varchar(1000) NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `name`, `slug`, `image`, `parent_id`, `sort_order`, `description`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Mô hình Gundam', 'mo-hinh-gundam', 'mo-hinh-gundam.png', 0, 1, 'categorymain', 'Mô hình Gundam', 'Mô hình Gundam', '2023-10-02 08:54:51', '2023-10-26 04:32:28', 1, 1, 1),
(2, 'Mô hình Anime', 'mo-hinh-anime', 'mo-hinh-anime.png', 0, 1, 'ac', 'Mô hình Anime', 'Mô hình Anime', '2023-10-02 09:49:30', '2023-10-26 04:32:40', 1, 1, 1),
(3, 'Mô hình Lắp ráp', 'mo-hinh-lap-rap', 'aaa.jpg', 0, 1, 'aa', 'Mô hình Lắp ráp', 'Mô hình Lắp ráp', '2023-10-02 09:49:30', '2023-10-02 09:49:30', 1, NULL, 1),
(7, 'Gundam giá rẻ', 'mo-hinh-gia-re', 's.jpg', 1, 1, 'categorymain', 'Gundam giá rẻ', 'Gundam giá rẻ', '2023-06-02 08:48:06', '2023-10-02 08:54:51', 1, NULL, 1),
(8, 'Gundam Bandai', 'mo-hinh-bandai', 'as.jpg', 1, 1, 'a', 'Gundam Bandai', 'Gundam Bandai', '2023-10-02 09:42:53', '2023-10-02 09:42:53', 1, NULL, 1),
(9, 'HG Gundam ( High Grade )', 'hg-gundam', 'av.jpg', 1, 1, 'ac', 'HG Gundam ( High Grade )', 'HG Gundam ( High Grade )', '2023-10-02 09:42:53', '2023-10-02 09:42:53', 1, NULL, 1),
(10, 'OnePiece', 'onepiece', 'avb', 2, 1, 'sfsf', 'OnePiece', 'OnePiece', '2023-10-02 09:53:11', '2023-10-02 09:53:11', 1, NULL, 1),
(11, 'Naruto', 'naruto', 'dhd', 2, 1, 'sfs', 'Naruto', 'Naruto', '2023-10-02 09:53:11', '2023-10-02 09:53:11', 1, NULL, 1),
(12, 'Dragon Ball', 'dragon-ball', 'sfa', 2, 1, 'ssg', 'Dragon Ball', 'Dragon Ball', '2023-10-02 09:54:27', '2023-10-02 09:54:27', 1, NULL, 1),
(13, 'Genshin Impact', 'genshin-impact', 'acvb', 2, 1, 'nj', 'Genshin Impact', 'Genshin Impact', '2023-10-02 09:55:01', '2023-10-02 09:55:01', 1, NULL, 1),
(14, 'Kimetsu no Yaiba', 'kimetsu-no-yaiba', 'jk', 2, 1, 'nh', 'Kimetsu no Yaiba', 'Kimetsu no Yaiba', '2023-10-02 09:55:34', '2023-10-02 09:55:34', 1, NULL, 1),
(15, 'Máy bay', 'may-bay', 'rru', 3, 1, 'sggs', 'Máy bay', 'Máy bay', '2023-10-02 09:56:04', '2023-10-02 09:56:04', 1, NULL, 1),
(16, 'Xe máy', 'xe-may', 'nhjd', 3, 1, 'itit', 'Xe máy', 'Xe máy', '2023-10-02 09:56:35', '2023-10-02 09:56:35', 1, NULL, 1),
(17, 'Thuyền', 'thuyen', 'ui', 3, 1, 'uuy', 'Thuyền', 'Thuyền', '2023-10-02 09:57:09', '2023-10-02 09:57:09', 1, NULL, 1),
(18, 'Mô hình kiến trúc', 'mo-hinh-kien-truc', 'ot', 3, 1, 'ds', 'Mô hình kiến trúc', 'Mô hình kiến trúc', '2023-10-02 09:57:44', '2023-10-02 09:57:44', 1, NULL, 1),
(19, 'Mô hình lắp ráp khác', 'mo-hinh-lap-rap-khac', 'mo-hinh-lap-rap-khac.png', 3, 1, 'đs', 'Mô hình lắp ráp khác', 'Mô hình lắp ráp khác', '2023-10-02 09:58:18', '2023-10-26 04:32:14', 1, 1, 1),
(22, 'gun damfaf', 'gun-damfaf', 'gun-damfaf.png', 1, 0, 'âfa', 'faf', 'âf', '2023-10-25 10:25:47', '2023-10-26 04:33:51', 1, NULL, 0),
(23, 'Bật Lửa Điện Móc Khoá', 'bat-lua-dien-moc-khoa', 'bat-lua-dien-moc-khoa.webp', 0, 0, 'ffafaf', 'abc', 'abc', '2023-11-14 23:04:35', '2023-11-14 23:04:41', 1, NULL, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `coment_rating`
--

CREATE TABLE `coment_rating` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `coment` varchar(1000) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `replay_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `rating_score` float NOT NULL DEFAULT 5
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `coment_rating`
--

INSERT INTO `coment_rating` (`id`, `product_id`, `user_id`, `coment`, `created_at`, `replay_id`, `rating_score`) VALUES
(1, 1, 1, 'abc', '2023-11-06 08:34:40', 0, 4),
(2, 2, 2, 'abc', '2023-11-06 08:35:06', 0, 3),
(3, 3, 3, 'abcd', '2023-11-06 08:35:06', 0, 5),
(4, 4, 2, 'abcs', '2023-11-06 08:36:07', 0, 2),
(5, 1, 2, 'abc', '2023-11-14 07:42:06', 0, 5),
(6, 5, 1, 'abc', '2023-11-16 04:52:57', 0, 4),
(7, 6, 1, 'abc', '2023-11-16 04:52:57', 0, 5),
(8, 7, 1, 'abc', '2023-11-16 04:55:21', 0, 4),
(9, 8, 1, 'abc', '2023-11-16 04:55:21', 0, 5),
(10, 9, 1, 'abc', '2023-11-16 04:56:00', 0, 4),
(11, 21, 1, 'abc', '2023-11-16 04:56:34', 0, 5),
(12, 20, 1, 'abc', '2023-11-16 04:56:34', 0, 4),
(13, 19, 1, 'abc', '2023-11-16 04:57:09', 0, 5),
(14, 18, 1, 'abc', '2023-11-16 04:57:09', 0, 4),
(15, 17, 1, 'abc', '2023-11-16 04:57:32', 0, 5),
(16, 16, 1, 'abc', '2023-11-16 04:57:32', 0, 5),
(17, 15, 1, 'abc', '2023-11-16 04:57:42', 0, 5),
(18, 12, 1, 'abc', '2023-11-16 04:58:24', 0, 5),
(19, 10, 1, 'abc', '2023-11-16 04:58:24', 0, 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `config`
--

CREATE TABLE `config` (
  `id` int(11) NOT NULL,
  `author` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `zalo` varchar(255) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `youtube` varchar(255) NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `contact`
--

CREATE TABLE `contact` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `content` mediumtext NOT NULL,
  `replay_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `contact`
--

INSERT INTO `contact` (`id`, `user_id`, `name`, `email`, `phone`, `title`, `content`, `replay_id`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 1, 'abc', 'abc', '1441663', 'abc', 'abc', 0, NULL, NULL, 1, NULL, 1),
(2, 1, 'gundamabc', 'vu45f', '26332', 'ffaf', 'fjf', 1, '2023-10-25 02:03:10', '2023-10-25 02:03:10', 1, 1, 1),
(3, 1, 'gundamabcaf', '1', '26332663', 'ffafsf', 'fjfsfs', 1, '2023-10-25 03:21:14', '2023-10-25 03:21:14', 1, 1, 1),
(5, 2, 'dgfdgfdh11', 'vu45ffấd', '263326634242', 'ffafsffaf', 'fjfsfsaf', 1, '2023-10-25 03:21:09', '2023-10-26 00:29:50', 1, 1, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `menu`
--

CREATE TABLE `menu` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `parent_id` int(11) UNSIGNED NOT NULL DEFAULT 0,
  `table_id` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `position` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `sort_order` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `menu`
--

INSERT INTO `menu` (`id`, `name`, `link`, `parent_id`, `table_id`, `position`, `type`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `sort_order`) VALUES
(1, 'Trang chủ', '/', 0, 1, 'mainmenu', 'int', '2023-10-04 10:34:10', '2023-10-04 10:34:10', 1, NULL, 1, 1),
(2, 'Sản phẩm', '', 0, 1, 'mainmenu', 'a', '2023-10-04 10:34:10', '2023-10-04 10:34:10', 1, NULL, 1, 2),
(3, 'Giới thiệu', '/gioi-thieu', 0, 1, 'mainmenu', 'a', '2023-10-04 10:35:18', '2023-10-04 10:35:18', 1, NULL, 1, 3),
(4, 'Tin tức', '/tin-tuc', 0, 1, 'mainmenu', 'a', '2023-10-04 10:36:18', '2023-10-04 10:36:18', 1, NULL, 1, 4),
(5, 'Liên hệ', '/lien-he', 0, 1, 'mainmenu', 'int', '2023-10-04 10:39:40', '2023-10-04 10:39:40', 1, NULL, 1, 5),
(6, 'Tất cả sản phẩm', '/tat-ca-san-pham', 2, 1, 'mainmenu', 'int', '2023-10-04 10:39:40', '2023-10-04 10:39:40', 1, NULL, 1, 0),
(7, 'Sản phẩm theo danh mục', '/danh-muc-san-pham/mo-hinh-gundam', 2, 1, 'mainmenu', 'int', '2023-10-04 10:40:57', '2023-10-04 10:40:57', 1, NULL, 1, 0),
(8, 'Sản phẩm theo thương hiệu', '/thuong-hieu-san-pham/gundam', 2, 1, 'mainmenu', 'int', '2023-10-04 10:41:43', '2023-10-04 10:41:43', 1, NULL, 1, 0),
(9, 'Thương hiệu', '/thuong-hieu', 0, 1, 'mainmenu', 'int', '2023-10-10 06:40:03', '2023-10-10 06:40:03', 1, NULL, 1, 1),
(11, 'Robotime', '/thuong-hieu/robotime', 9, 1, 'mainmenu', 'int', '2023-10-10 06:43:09', '2023-10-10 06:43:09', 1, NULL, 1, 1),
(12, 'Juhang', '/thuong-hieu/juhang', 9, 1, 'mainmenu', 'int', '2023-10-10 06:43:09', '2023-10-10 06:43:09', 1, NULL, 1, 1),
(13, 'Chương trình ưu đãi', '/bai-viet/chuong-trinh-uu-dai', 4, 1, 'mainmenu', 'int', NULL, NULL, 1, NULL, 1, 1),
(14, 'Back to school- Giảm đến 50%', '/bai-viet/back-to-school\r\n', 4, 1, 'mainmenu', 'int', NULL, NULL, 1, NULL, 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2023_05_29_092202_create_brand_table', 1),
(3, '2023_05_29_092228_create_category_table', 1),
(4, '2023_05_29_092340_create_contact_table', 1),
(5, '2023_05_29_092353_create_menu_table', 1),
(6, '2023_05_29_092413_create_order_table', 1),
(7, '2023_05_29_092432_create_orderdetail_table', 1),
(8, '2023_05_29_092447_create_product_table', 1),
(9, '2023_05_29_092459_create_post_table', 1),
(10, '2023_05_29_092512_create_slider_table', 1),
(11, '2023_05_29_092524_create_topic_table', 1),
(12, '2023_05_29_092539_create_user_table', 1),
(13, '2023_06_29_054544_create_single_table', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order`
--

CREATE TABLE `order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `delivery_name` varchar(255) NOT NULL,
  `delivery_phone` varchar(255) NOT NULL,
  `delivery_email` varchar(255) NOT NULL,
  `delivery_gender` varchar(1000) NOT NULL,
  `delivery_address` varchar(255) NOT NULL,
  `note` mediumtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `order`
--

INSERT INTO `order` (`id`, `user_id`, `delivery_name`, `delivery_phone`, `delivery_email`, `delivery_gender`, `delivery_address`, `note`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 1, 'vu', '0007665', 'amgg', 'nam', 'dssxxff', 'xgxgxcgojilj', NULL, NULL, 0, NULL, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orderdetail`
--

CREATE TABLE `orderdetail` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `price` double(15,2) NOT NULL,
  `discount` double(12,2) NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `amount` double(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `orderdetail`
--

INSERT INTO `orderdetail` (`id`, `order_id`, `product_id`, `price`, `discount`, `qty`, `created_at`, `updated_at`, `amount`) VALUES
(1, 1, 1, 999999.99, 100000.00, 10, NULL, NULL, 1000.00);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `post`
--

CREATE TABLE `post` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `topic_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `detail` mediumtext NOT NULL,
  `image` varchar(1000) NOT NULL,
  `type` mediumtext NOT NULL,
  `description` varchar(1000) NOT NULL,
  `metakey` varchar(255) DEFAULT NULL,
  `metadesc` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `post`
--

INSERT INTO `post` (`id`, `topic_id`, `title`, `slug`, `detail`, `image`, `type`, `description`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 1, 'MUA 2 TẶNG 1 - Mừng quốc tế thiếu nhi 1/6', 'mua2-tang1', 'Giảm giá đến 50% với tất cả sản phẩm mô hình kim loại 3D, mô hình ốc vít 3D, mô hình gỗ 3D, mô hình nhựa 3D, mô hình giấy 3D tại Art Puzzle. Giá sản phẩm tại website là giá đã giảm...', 'blog02.webp', 'By Toto News / 19 Tháng 9, 2023', '', 'MUA 2 TẶNG 1 - Mừng quốc tế thiếu nhi 1/6', 'MUA 2 TẶNG 1 - Mừng quốc tế thiếu nhi 1/6', '2023-10-02 13:29:23', '2023-10-02 13:29:23', 1, NULL, 1),
(2, 2, 'Back to School - Super Sale giảm đến 50%', 'back-to-school', 'Back to School - Super Sale giảm đến 50%', 'blog01.webp', 'By Toto News / 19 Tháng 9, 2023', '', 'Back to School - Super Sale giảm đến 50%', 'Back to School - Super Sale giảm đến 50%', '2023-10-02 13:47:57', '2023-10-02 13:47:57', 1, NULL, 1),
(3, 1, 'Papercraft là gì & cách làm mô hình Gundam bằng giấy', '', 'Papercraft là gì & cách làm mô hình Gundam bằng giấy', 'blog03.webp', 'By Toto News / 19 Tháng 9, 2023', '', 'By Toto News / 19 Tháng 9, 2023', 'By Toto News / 19 Tháng 9, 2023', '2023-10-02 13:47:57', '2023-10-02 13:47:57', 1, NULL, 1),
(4, 2, 'Dân chơi mô hình sống “flex” thế nào?', '', 'Dân chơi mô hình sống “flex” thế nào?', 'blog04.webp', 'By Toto News / 19 Tháng 9, 2023', '', 'Dân chơi mô hình sống “flex” thế nào?', 'Dân chơi mô hình sống “flex” thế nào?', '2023-10-02 13:49:35', '2023-10-02 13:49:35', 1, NULL, 1),
(5, 1, 'Chính sách giao hàng', 'chinh-sach-giao-hang', 'Art Puzzle luôn hướng đến việc cung cấp dịch vụ vận chuyển tốt nhất với mức phí cạnh tranh cho tất cả các đơn hàng mà quý khách đặt với chúng tôi. Chúng tôi hỗ trợ giao hàng trên toàn quốc với chính sách giao hàng cụ thể như sau\r\n\r\n1. Quy trình giao nhận hàng\r\n\r\nArt Puzzle hợp tác với những đơn vị vận chuyển đáng tin cậy để giao hàng trực tiếp đến quý khách trên phạm vi toàn quốc.\r\n\r\nChúng tôi sử dụng dịch vụ Giao Hàng Tiết Kiệm theo tiêu chí, nhanh và rẻ. Đơn hàng của quý khách sẽ được liên hệ và giao tối đa trong 3 lần. Trường hợp lần đầu giao hàng không thành công, sẽ có nhân viên liên hệ để sắp xếp lịch giao hàng lần 2 và 3 với quý khách.\r\n\r\nNếu không liên hệ được, chúng tôi sẽ cố gắng liên hệ lại trong 24 giờ tiếp theo (qua thư điện tử hoặc gọi trực tiếp). Trong trường hợp vẫn không thể liên hệ được hoặc không nhận được bất kì phản hồi nào từ phía quý khách, đơn hàng sẽ không còn hiệu lực.\r\n\r\nTại thời điểm nhận hàng, quý khách có thể kiểm tra tình trạng, số lượng các sản phẩm trong đơn đặt hàng. Đối với các đơn hàng đã được thanh toán trước, quý khách vui lòng xuất trình giấy tờ tùy thân (CMND hay giấy phép lái xe…) để ghi nhận.\r\n\r\n2. Chi phí vận chuyển\r\n\r\nFREESHIP toàn quốc với đơn hàng có tổng giá trị thanh toán từ 290.000 đ trở lên.\r\n\r\nĐồng giá phí ship 25k cho mọi khu vực trên toàn quốc với đơn hàng có tổng giá trị thanh toàn ít hơn 290.000 đ.\r\n\r\n3. Thời gian giao nhận hàng\r\n\r\nArt Puzzle sẽ vận chuyển hàng trong thời gian thỏa thuận khi quý khách thực hiện đầy đủ các thủ tục đặt hàng. Thời gian vận chuyển hàng trong vòng 2 – 3 ngày làm việc (không tính chủ nhật hay các ngày lễ Tết). Thời gian nhận hàng từ 1 - 2 ngày đối với nội thành Tp. Hồ Chí Minh và từ 3 - 5 ngày đối với tỉnh thành khác.\r\n\r\nXin lưu ý rằng Art Puzzle bảo lưu quyền thay đổi thời gian giao hàng trong một số trường hợp bất khả kháng như thời tiết xấu, điều kiện giao thông không thuận lợi, xe hỏng trên đường giao hàng, trục trặc trong quá trình xuất hàng. Chúng tôi sẽ chủ động liên hệ với khách hàng để thông báo trong những trường hợp trên.\r\n\r\nMọi chi tiết xin liên hệ Hotline: 0988 891 692 (Ms. Trinh) hoặc qua Email: artpuzzlevn@gmail.com\r\n\r\n', 'a.jpg', 'page', 'chinhsach', '', '', NULL, NULL, 1, NULL, 3),
(6, 1, 'Chính sách bảo mật', 'chinh-sach-bao-mat', 'Chính sách bảo mật này nhằm giúp Quý khách hiểu về cách website thu thập và sử dụng thông tin cá nhân của mình thông qua việc sử dụng trang web, bao gồm mọi thông tin có thể cung cấp thông qua trang web khi Quý khách đăng ký tài khoản, đăng ký nhận thông tin liên lạc từ chúng tôi, hoặc khi Quý khách mua sản phẩm, dịch vụ, yêu cầu thêm thông tin dịch vụ từ chúng tôi.\r\n\r\nChúng tôi sử dụng thông tin cá nhân của Quý khách để liên lạc khi cần thiết liên quan đến việc Quý khách sử dụng website của chúng tôi, để trả lời các câu hỏi hoặc gửi tài liệu và thông tin Quý khách yêu cầu.\r\n\r\nTrang web của chúng tôi coi trọng việc bảo mật thông tin và sử dụng các biện pháp tốt nhất để bảo vệ thông tin cũng như việc thanh toán của khách hàng. \r\n\r\nMọi thông tin giao dịch sẽ được bảo mật ngoại trừ trong trường hợp cơ quan pháp luật yêu cầu.', '', 'page', 'chinhsach', '', '', NULL, NULL, 1, NULL, 3),
(7, 1, 'Chính sách đổi trả', 'chinh-sach-doi-tra', '1. Điều kiện đổi trả\r\n\r\nQuý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/ trả lại hàng ngay tại thời điểm giao/nhận hàng trong những trường hợp sau:\r\n\r\nHàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như trên website tại thời điểm đặt hàng.\r\nKhông đủ số lượng, không đủ bộ như trong đơn hàng.\r\nTình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ…\r\nTrường hợp Sheet thép/gỗ bị trùng lặp. Ví dụ: có 3 sheet mã A, B, C nhưng bạn nhận A, A, C thì shop sẽ gửi cho bạn Sheet B\r\nKhách hàng có trách nhiệm xuất trình Video và hình ảnh chứng minh sự thiếu sót trên để hoàn thành việc hoàn trả/đổi trả hàng hóa. \r\n\r\n \r\n\r\n2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả\r\n\r\nThời gian thông báo đổi trả: trong vòng 48h kể từ khi nhận sản phẩm đối với trường hợp sản phẩm thiếu phụ kiện, quà tặng hoặc bể vỡ.\r\nThời gian gửi chuyển trả sản phẩm: trong vòng 14 ngày kể từ khi nhận sản phẩm.\r\nĐịa điểm đổi trả sản phẩm: Khách hàng có thể mang hàng trực tiếp đến văn phòng/ cửa hàng của chúng tôi hoặc chuyển qua đường bưu điện.\r\nChúng tôi không chấp nhận yêu cầu hoàn tiền dưới mọi hình thức\r\n \r\n3. Địa chỉ đổi trả hàng\r\nSĐT: 0988.891.692 (Ms. Trinh)\r\nĐịa chỉ: 23/36/18 Nguyễn Hữu Tiến, P. Tây Thạnh, Q. Tân Phú, Tp. Hồ Chí Minh\r\nSau khi nhận được sản phẩm, Art Puzzle sẽ kiểm tra và đổi lại sản phẩm khác cho quý khách\r\n\r\n \r\n\r\nTrong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên quan đến chất lượng sản phẩm, Quý Khách hàng vui lòng liên hệ đường dây chăm sóc khách hàng của chúng tôi.', '', 'page', 'chinhsach', '', '', NULL, NULL, 1, NULL, 3),
(8, 1, 'Điều khoản dịch vụ', 'dieu-khoan-dich-vu', '1. Giới thiệu\r\n\r\nChào mừng quý khách hàng đến với website chúng tôi.\r\n\r\nKhi quý khách hàng truy cập vào trang website của chúng tôi có nghĩa là quý khách đồng ý với các điều khoản này. Trang web có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào trong Điều khoản mua bán hàng hóa này, vào bất cứ lúc nào. Các thay đổi có hiệu lực ngay khi được đăng trên trang web mà không cần thông báo trước. Và khi quý khách tiếp tục sử dụng trang web, sau khi các thay đổi về Điều khoản này được đăng tải, có nghĩa là quý khách chấp nhận với những thay đổi đó.\r\n\r\nQuý khách hàng vui lòng kiểm tra thường xuyên để cập nhật những thay đổi của chúng tôi.\r\n\r\n2. Hướng dẫn sử dụng website\r\n\r\nKhi vào web của chúng tôi, khách hàng phải đảm bảo đủ 18 tuổi, hoặc truy cập dưới sự giám sát của cha mẹ hay người giám hộ hợp pháp. Khách hàng đảm bảo có đầy đủ hành vi dân sự để thực hiện các giao dịch mua bán hàng hóa theo quy định hiện hành của pháp luật Việt Nam.\r\n\r\nTrong suốt quá trình đăng ký, quý khách đồng ý nhận email quảng cáo từ website. Nếu không muốn tiếp tục nhận mail, quý khách có thể từ chối bằng cách nhấp vào đường link ở dưới cùng trong mọi email quảng cáo.\r\n\r\n \r\n\r\n3. Thanh toán an toàn và tiện lợi\r\n\r\nNgười mua có thể tham khảo các phương thức thanh toán sau đây và lựa chọn áp dụng phương thức phù hợp:\r\n\r\nCách 1: Thanh toán trực tiếp (người mua nhận hàng tại địa chỉ người bán)\r\nCách 2: Thanh toán sau (COD – giao hàng và thu tiền tận nơi)\r\nCách 3: Thanh toán online qua thẻ tín dụng, chuyển khoản, MOMO', '', 'page', 'chinhsach', '', '', NULL, NULL, 1, NULL, 3),
(9, 1, 'Hướng dẫn mua hàng', 'huong-dan-mua-hang', '1. Mua trực tiếp tại shop Art Puzzle\r\n\r\nCác bạn có thể thỏa thích xem mô hình lắp ráp 3D và mua hàng tại Art Puzzle, chúng tôi luôn nhiệt tình chào đón các bạn tại Art Puzzle. Các bạn nên gọi điện thoại trước cho Art Puzzle khi muốn đến mua mô hình để phòng trường hợp hết hàng\r\n\r\nĐịa chỉ: 23/36/18 Nguyễn Hữu Tiến, Phường Tây Thạnh, Q. Tân Phú, Tp. Hồ Chí Minh\r\n\r\nHotline: 0988.891.692 (Ms. Trinh)\r\n\r\n2. Mua hàng qua số điện thoại\r\n\r\nQuý khách vui lòng gọi số Hotline để cung cấp thông tin: Mã sản phẩm, số lượng, Tên, SĐT và địa chỉ người mua hàng. Art Puzzle sẽ tư vấn các hình thức đặt hàng nhanh chóng và dễ dàng nhất.\r\n\r\n3. Mua hàng qua Messenger Facebook\r\n\r\nQuý khách vui lòng chat với Art Puzzle tại đây: https://m.me/artpuzzle.vn\r\n\r\n4. Mua hàng qua website ArtPuzzle.vn', '', 'page', 'chinhsach', '', '', NULL, NULL, 1, NULL, 3),
(11, 1, 'BẢNG MÃ XÁC ĐỊNH NĂM SẢN XUẤT ZIPPO', 'bang-ma-xac-dinh-nam-san-xuat-zippo', 'ffafag', 'bang-ma-xac-dinh-nam-san-xuat-zippo.png', 'post', 'undefined', NULL, NULL, '2023-10-25 12:57:47', '2023-10-26 01:23:54', 1, NULL, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `brand_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `price` double(10,1) NOT NULL,
  `price_sale` double(10,1) DEFAULT NULL,
  `image` varchar(1000) NOT NULL,
  `detail` mediumtext NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `metakey` varchar(255) DEFAULT NULL,
  `metadesc` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `category_id`, `brand_id`, `name`, `slug`, `price`, `price_sale`, `image`, `detail`, `description`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 7, 1, 'Mô Hình Kim Loại 3D Lắp Ráp Gumdam', 'mo-hinh-kim-loai-3d-lap-rap-gundam', 1248000.0, 1375000.0, 'product01.webp,product01a.webp', 'P-Bandai RG RX-93 Nu Gundam Clear Color\r\nSản phẩm không bao gồm giá đỡ mô hình (Action Base is not included).\r\nSản phẩm nhựa cao cấp với độ sắc nét cao, an toàn cho người chơi\r\nMô hình lắp ráp rèn luyện tính kiên nhẫn, khéo léo.\r\nCác khớp cử động linh hoạt theo ý muốn.', '', 'Mô Hình Kim Loại 3D Lắp Ráp Gumdam', 'new', '2023-10-04 06:15:29', '2023-10-04 06:15:29', 1, NULL, 1),
(2, 7, 1, 'Mô Hình Kim Loại Lắp Ráp 3D Piececool Sky Dominator HP095-GBK – MP341', 'mo-hinh-kim-loai-lap-rap-3d-piececool-sky-dominator-hp095-gbk-mp341', 1050000.0, 1375000.0, 'product07.webp,product07a.webp', 'Mã sản phẩm: MP341\r\nChất liệu: Thép không rỉ inox 430, đồng thau\r\nKích thước (Dài*Rộng*Cao): 20 X 19.5 X 22.3CM\r\nĐộ khó: 7/10\r\nMảnh ghép: 489\r\nHãng sản xuất: Piececool\r\nPhù hợp độ tuổi: 14+\r\nDụng cụ cần thiết: Kìm cắt, kìm nhọn, nhíp, bộ uốn\r\nHướng dẫn lắp ráp mô hình chi tiết, dễ hiểu', '', 'Mô Hình Kim Loại Lắp Ráp 3D Piececool Sky Dominator HP095-GBK – MP341', 'new', '2023-10-04 06:15:29', '2023-10-04 06:15:29', 1, NULL, 1),
(3, 9, 1, 'Mô Hình Kim Loại 3D Lắp Ráp Piececool Marvel The Hulk Buster IP014-RG - MP908', 'mo-hinh-kim-loai-3d-lap-rap-piececool-marvel-the-hulk-buster-ip014-rg-mp908', 2050000.0, 2050000.0, 'product08.webp,product08a.webp', 'Mã sản phẩm: MP908\r\nChất liệu: Thép không rỉ inox 430, đồng thau\r\nKích thước (Dài*Rộng*Cao): 18 X 11 X 24 CM\r\nĐộ khó: 10/10\r\nMảnh ghép: 629\r\nHãng sản xuất: Piececool\r\nPhù hợp độ tuổi: 14+\r\nDụng cụ cần thiết: Kìm cắt, kìm nhọn, nhíp, bộ uốn\r\nHướng dẫn lắp ráp mô hình chi tiết, dễ hiểu', '', 'Mô Hình Kim Loại 3D Lắp Ráp Piececool Marvel The Hulk Buster IP014-RG - MP908', 'hot', '2023-10-04 06:18:49', '2023-10-04 06:18:49', 1, NULL, 1),
(4, 8, 1, 'Mô Hình Kim Loại Lắp Ráp 3D Microworld Đào Hoa Nguyên (285 mảnh, Peach Blossom Source) J076 - MP1181', 'mo-hinh-kim-loai-rap-lap-3d-microworl-dao-hoa-nguyen-j076-mp1181', 950000.0, 1250000.0, 'product02.webp,product02a.webp', 'Mã sản phẩm: MP1181\r\nChất liệu: Thép không rỉ inox 430, đồng thau\r\nKích thước (Dài*Rộng*Cao): 20.5 x 11.5 x 20.5 CM\r\nĐộ khó: 5/10\r\nMảnh ghép: 285\r\nHãng sản xuất: Microworld\r\nPhù hợp độ tuổi: 14+\r\nDụng cụ cần thiết: Kìm cắt, kìm nhọn, nhíp, bộ uốn\r\nHướng dẫn lắp ráp mô hình chi tiết, dễ hiểu', '', 'Mô Hình Kim Loại Lắp Ráp 3D Microworld Đào Hoa Nguyên (285 mảnh, Peach Blossom Source) J076 - MP1181', 'new', '2023-10-04 06:33:13', '2023-10-04 06:33:13', 1, NULL, 1),
(5, 9, 1, 'Mô Hình Kim Loại Lắp Ráp 3D Piececool Cung Thiên Phúc (540 mảnh, Tianfu Palace) P314-GN - MP1177', 'mo-hinh-kim-loai-lap-rap-3d-piececool-cung-thien-phuc-p314-gn-mp1177', 1155000.0, NULL, 'product03.jpg,product03a.webp', 'Mã sản phẩm: MP1177\r\nChất liệu: Thép không rỉ inox 430, đồng thau\r\nKích thước (Dài*Rộng*Cao): 23x15x28.5 cm\r\nĐộ khó: 6/10\r\nMảnh ghép: 540\r\nHãng sản xuất: Piececool\r\nPhù hợp độ tuổi: 14+\r\nDụng cụ cần thiết: Kìm cắt, kìm nhọn, nhíp, bộ uốn\r\nHướng dẫn lắp ráp mô hình chi tiết, dễ hiểu', '', 'Mô Hình Kim Loại Lắp Ráp 3D Piececool Cung Thiên Phúc (540 mảnh, Tianfu Palace) P314-GN - MP1177', 'new', '2023-10-04 06:33:13', '2023-10-04 06:33:13', 1, NULL, 1),
(6, 8, 1, 'Mô Hình Kim Loại Lắp Ráp 3D Piececool Tàu Titanic (226 mảnh) HP300-KW - MP1175', 'mo-hinh-kim-loai-lap-rap-3d-piececool-tau-titanic-hp200-kw-mp1175', 475000.0, 680000.0, 'product04.webp,product04a.webp', 'Mã sản phẩm: MP1175\r\nChất liệu: Thép không rỉ inox 430, đồng thau\r\nKích thước (Dài*Rộng*Cao): 25.5x3.8x12.6 cm\r\nĐộ khó: 4/10\r\nMảnh ghép: 226\r\nHãng sản xuất: Piececool\r\nPhù hợp độ tuổi: 14+\r\nDụng cụ cần thiết: Kìm cắt, kìm nhọn, nhíp, bộ uốn\r\nHướng dẫn lắp ráp mô hình chi tiết, dễ hiểu', '', 'Mô Hình Kim Loại Lắp Ráp 3D Piececool Tàu Titanic (226 mảnh) HP300-KW - MP1175', 'hot', '2023-10-04 06:46:08', '2023-10-04 06:46:08', 1, NULL, 1),
(7, 7, 1, 'Mô Hình Kim Loại Lắp Ráp 3D Piececool Tàu Hoàng Gia Tây Ban Nha Silent Mary (363 mảnh) HP315-KS - MP1176', 'mo-hinh-kim-loai-rap-rap-3d-piececool-tau-hoang-gia-tay-ban-nha-silent-mary-hp315-ks-mp1176', 599000.0, 599000.0, 'product05.jpg,product05a.webp', 'Mã sản phẩm: MP1176\r\nChất liệu: Thép không rỉ inox 430, đồng thau\r\nKích thước (Dài*Rộng*Cao): 23.5x12.5x21 cm\r\nĐộ khó: 5/10\r\nMảnh ghép: 363\r\nHãng sản xuất: Piececool\r\nPhù hợp độ tuổi: 14+\r\nDụng cụ cần thiết: Kìm cắt, kìm nhọn, nhíp, bộ uốn\r\nHướng dẫn lắp ráp mô hình chi tiết, dễ hiểu', '', 'Mô Hình Kim Loại Lắp Ráp 3D Piececool Tàu Hoàng Gia Tây Ban Nha Silent Mary (363 mảnh) HP315-KS - MP1176', 'new', '2023-10-04 06:50:01', '2023-10-04 06:50:01', 1, NULL, 1),
(8, 7, 1, 'Mô Hình Kim Loại Lắp Ráp 3D Microworld Nhà Thờ Sagrada Família (311 mảnh) J072 - MP1170', 'mo-hinh-kim-loai-lap-rap-3d-microworld-nha-tho-sagrada-familia-j071-mp1170', 1150000.0, 1150000.0, 'product06.jpg,product06a.webp', 'Mã sản phẩm: MP1170\r\nChất liệu: Thép không rỉ inox 430, đồng thau\r\nKích thước (Dài*Rộng*Cao): 12x9.8x16.2 cm\r\nĐộ khó: 6/10\r\nMảnh ghép: 311\r\nHãng sản xuất: Microworld\r\nPhù hợp độ tuổi: 14+\r\nDụng cụ cần thiết: Kìm cắt, kìm nhọn, nhíp, bộ uốn\r\nHướng dẫn lắp ráp mô hình chi tiết, dễ hiểu', '', 'Mô Hình Kim Loại Lắp Ráp 3D Microworld Nhà Thờ Sagrada Família (311 mảnh) J072 - MP1170', 'sale', '2023-10-04 06:50:01', '2023-10-04 06:50:01', 1, NULL, 1),
(9, 8, 3, 'Mô Hình Kim Loại Lắp Ráp 3D Metal Head HALO Master Chief Helmet – MP1092', 'mo-hinh-kim-loai-lap-rap-3d-metal-head-halo-master-chief-helmet-mp1092', 48000.0, 59000.0, 'product09.jpg,product09a.jpeg', 'Mã sản phẩm: MP1092\r\nChất liệu: Thép không rỉ inox 430, đồng thau\r\nKích thước (Dài*Rộng*Cao): 3.81 X 4.45 X 3.81 CM\r\nĐộ khó: 2/10\r\nMảnh ghép: 50\r\nHãng sản xuất: Metal Head\r\nPhù hợp độ tuổi: 14+\r\nDụng cụ cần thiết: Kìm cắt, kìm nhọn, nhíp, bộ uốn\r\nHướng dẫn lắp ráp mô hình chi tiết, dễ hiểu', '', 'Mô Hình Kim Loại Lắp Ráp 3D Metal Head HALO Master Chief Helmet – MP1092', 'new', '2023-10-04 06:53:14', '2023-11-14 23:18:09', 1, NULL, 1),
(10, 7, 3, 'Mô Hình Gỗ 3D Lắp Ráp ROBOTIME Xe Hơi Cổ Điển Vintage Car TG504 – WP186', 'mo-hinh-go-3d-lap-rap-robotime-xe-hoi-co-dien-vintage-car-tg504-wp186', 208000.0, 285000.0, 'product10.webp,product10a.webp', 'Mã sản phẩm: WP186\r\nChất liệu: Gỗ ép, vải, nhựa\r\nKích thước (Dài*Rộng*Cao): 16 X 7 X 8 CM\r\nĐộ khó: 3/10\r\nMảnh ghép: 92\r\nHãng sản xuất: Robotime\r\nPhù hợp độ tuổi: 14+\r\nDụng cụ cần thiết: Kìm cắt, kìm nhọn, nhíp, bộ uốn\r\nHướng dẫn lắp ráp mô hình chi tiết, dễ hiểu', '', 'Mô Hình Gỗ 3D Lắp Ráp ROBOTIME Xe Hơi Cổ Điển Vintage Car TG504 – WP186', 'hot', '2023-10-04 06:53:14', '2023-10-04 06:53:14', 1, NULL, 1),
(12, 16, 1, 'Mô Hình Gỗ 3D Lắp Ráp ROBOTIME ROKR Xe Mô Tô Harley Davidson (Cruiser Motorcycle) LK504 – WP229', 'mo-hinh-go-3d-lap-rap-robotime-rokr-xe-mo-to-harley-davidson-cruiser-motorcycle-lk504-wp229', 668000.0, NULL, 'product11.webp,product11a.webp', 'Mô Hình Gỗ 3D Lắp Ráp ROBOTIME ROKR Xe Mô Tô Harley Davidson (Cruiser Motorcycle) LK504 – WP229', NULL, NULL, NULL, '2023-11-14 21:05:25', '2023-11-14 23:37:11', 1, NULL, 1),
(15, 19, 3, 'Mô Hình Nhựa 3D Lắp Ráp Siêu Xe Đua Porsche 911 RSR 011 (1631 mảnh) - LG0059', 'mo-hinh-nhua-3d-lap-rap-sieu-xe-dua-porsche-911-rsr-011-1631-manh-lg0059', 810000.0, NULL, 'product12.webp,product12a.jpeg', 'Mô Hình Nhựa 3D Lắp Ráp Siêu Xe Đua Porsche 911 RSR 011 (1631 mảnh) - LG0059', NULL, NULL, NULL, '2023-11-15 20:45:27', '2023-11-15 20:45:27', 1, NULL, 1),
(16, 19, 3, 'Mô Hình Nhựa 3D Lắp Ráp Technic Siêu Xe Đua Bugatti Chiron KK6890 (4031 mảnh) 1:8 – LG0084', 'mo-hinh-nhua-3d-lap-rap-technic-sieu-xe-dua-bugatti-chiron-kk6890-4031-manh-18-lg0084', 1980000.0, NULL, 'product13.webp,product13a.webp', 'Mã sản phẩm: LG0084\r\nChất liệu: Nhựa ABS\r\nKích thước (Dài*Rộng*Cao): 56 X 32 X 14 CM\r\nĐộ khó:5/10\r\nMảnh ghép: 4031\r\nHãng sản xuất: Technic\r\nPhù hợp độ tuổi: 8+\r\nHướng dẫn lắp ráp mô hình chi tiết, dễ hiểu', NULL, NULL, NULL, '2023-11-15 20:46:31', '2023-11-15 20:46:31', 1, NULL, 1),
(17, 19, 3, 'Mô Hình Nhựa 3D Lắp Ráp Siêu Xe Mô Tô BMW M 1000 RR T2118 (1920 mảnh) 1:5 - LG0055', 'mo-hinh-nhua-3d-lap-rap-sieu-xe-mo-to-bmw-m-1000-rr-t2118-1920-manh-15-lg0055', 950000.0, NULL, 'product14.webp,product14a.jpeg', 'Mã sản phẩm: LG0055\r\nChất liệu: Nhựa ABS\r\nKích thước (Dài*Rộng*Cao):  45 X 17 X 27 CM\r\nĐộ khó: 6/10\r\nMảnh ghép: 1920\r\nHãng sản xuất: OEM\r\nPhù hợp độ tuổi: 8+\r\nHướng dẫn lắp ráp mô hình chi tiết, dễ hiểu', NULL, NULL, NULL, '2023-11-15 20:47:21', '2023-11-15 20:47:21', 1, NULL, 1),
(18, 2, 3, 'Mô Hình Luffy gear 5 cầm sét chiến đấu – Cao 26cm nặng 880gr – Có hộp', 'mo-hinh-luffy-gear-5-cam-set-chien-dau-cao-26cm-nang-880gr-co-hop', 409000.0, NULL, 'product15.jpg,product15a.jpg', 'Chiều cao (cm): 26     \r\n\r\nTrọng lượng (gram): 880       \r\n\r\nBộ sản phẩm gồm: Nhân vật cơ bản + 1 đảo đầu lâu trên mặt trăng có LED + 1 tay thay thế + 1 sét cầm tay\r\n\r\nBox: Có         \r\n\r\nChất liệu: PVC\r\n\r\nTình trạng: Còn mới\r\n\r\nChất liệu cao cấp, chắc chắn, Màu sắc đẹp mắt, Các chi tiết được làm vô cùng tỉ mỉ\r\n\r\n Mục đích: Trang trí văn phòng, bàn làm việc, sưu tầm, trưng bày, quà tặng,…\r\n\r\n Kiểu giao hàng: Giao ngay\r\n\r\nKiểu: cố định, không thể cử động\r\n\r\n Sản xuất: Hàng nội địa Trung Quốc', NULL, NULL, NULL, '2023-11-15 20:49:05', '2023-11-15 20:49:05', 1, NULL, 1),
(19, 2, 3, 'Mô hình Monkey D Luffy Gear 4', 'mo-hinh-monkey-d-luffy-gear-4', 1550000.0, NULL, 'product19.jpg,product19a.jpg', 'Series: One Piece\r\nChất Liệu : Nhựa PVC cao cấp\r\nTình trạng: New, full box\r\nKích thước: 30cm', NULL, NULL, NULL, '2023-11-15 20:49:58', '2023-11-15 20:49:58', 1, NULL, 1),
(20, 2, 3, 'Mô hình Zorojuurou', 'mo-hinh-zorojuurou', 1300000.0, NULL, 'product17.png,product17a.png', 'Thông số sản phẩm\r\nNhân Vật : Roronoa Zoro (Arc Wano)\r\nLoạt: One Piece\r\nChất Liệu : Nhựa PVC cao cấp\r\nTình trạng: New, full box\r\nKích thước: 25cm', NULL, NULL, NULL, '2023-11-15 20:50:46', '2023-11-15 20:50:46', 1, NULL, 1),
(21, 2, 3, 'MÔ HÌNH KAIDO RỒNG THẦN 21CM', 'mo-hinh-kaido-rong-than-21cm', 650000.0, NULL, 'product18.jpg,product18a.jpg', 'Chiếu Cao : 21cm\r\nTrọng Lượng ~ 1300Gram\r\nPhụ kiện đi kèm : Không\r\nChất liệu : Nhựa PVC cao cấp\r\nVỏ hộp kèm sản phẩm : Full box , hộp đẹp chắc chắn\r\nNhân vật : RÂU ĐEN\r\nFIGURE ANIME : ONE PIECE', NULL, NULL, NULL, '2023-11-15 20:51:31', '2023-11-15 20:51:31', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_sale`
--

CREATE TABLE `product_sale` (
  `id` int(11) NOT NULL,
  `sale_id` int(11) NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `pricesale` double(10,1) NOT NULL DEFAULT 1.0,
  `qty` int(11) NOT NULL,
  `qty_sold` int(11) NOT NULL DEFAULT 1,
  `date_begin` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `created_by` int(10) UNSIGNED DEFAULT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `product_sale`
--

INSERT INTO `product_sale` (`id`, `sale_id`, `product_id`, `pricesale`, `qty`, `qty_sold`, `date_begin`, `date_end`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 1, 1, 20000.0, 1, 3, '2023-11-06 03:53:48', '2023-11-30 09:53:48', '2023-11-06 02:54:28', '2023-11-06 02:54:28', NULL, NULL, 1),
(2, 2, 2, 20000.0, 1, 3, '2023-11-06 04:27:17', '2023-11-30 10:27:17', '2023-11-06 03:27:41', '2023-11-06 03:27:41', NULL, NULL, 1),
(3, 3, 3, 20000.0, 1, 2, '2023-11-06 05:17:50', '2023-11-30 11:17:50', '2023-11-06 04:18:11', '2023-11-06 04:18:11', NULL, NULL, 1),
(4, 2, 4, 20000.0, 1, 2, '2023-11-06 05:24:45', '2023-11-30 11:24:45', '2023-11-06 04:25:02', '2023-11-06 04:25:02', NULL, NULL, 1),
(5, 4, 20, 1.0, 10, 4, '2023-11-16 05:16:46', '2023-11-18 05:16:46', '2023-11-16 04:24:02', '2023-11-16 04:24:02', NULL, NULL, 1),
(6, 5, 17, 1.0, 10, 3, '2023-11-16 05:24:05', '2023-11-18 05:24:05', '2023-11-16 04:25:43', '2023-11-16 04:25:43', NULL, NULL, 1),
(7, 6, 16, 1.0, 10, 1, '2023-11-16 05:24:05', '2023-11-17 05:24:05', '2023-11-16 04:25:43', '2023-11-16 04:25:43', NULL, NULL, 1),
(8, 7, 15, 1.0, 10, 3, '2023-11-16 12:01:45', '2023-11-23 05:25:45', '2023-11-16 04:26:22', '2023-11-16 04:26:22', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_store`
--

CREATE TABLE `product_store` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `price` double NOT NULL,
  `qty` int(11) NOT NULL DEFAULT 1,
  `qty_sold` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(10) UNSIGNED DEFAULT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `product_store`
--

INSERT INTO `product_store` (`id`, `product_id`, `price`, `qty`, `qty_sold`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 1, 100000, 5, 4, '2023-11-06 02:53:41', '2023-11-06 02:53:41', NULL, NULL, 1),
(2, 2, 1248000, 3, 2, '2023-11-06 03:32:27', '2023-11-06 03:32:27', NULL, NULL, 1),
(3, 3, 210000, 10, 3, '2023-11-06 04:17:34', '2023-11-06 04:17:34', NULL, NULL, 1),
(4, 4, 999, 3, 2, '2023-11-06 04:24:34', '2023-11-06 04:24:34', NULL, NULL, 1),
(5, 5, 12222, 20, 3, '2023-11-06 08:45:59', '2023-11-06 08:45:59', NULL, NULL, 1),
(6, 6, 1150000, 60, 3, '2023-11-06 09:05:43', '2023-11-06 09:05:43', NULL, NULL, 1),
(7, 7, 1150000, 10, 2, '2023-11-06 09:05:43', '2023-11-06 09:05:43', NULL, NULL, 1),
(8, 8, 1999990, 10, 3, '2023-11-06 09:06:10', '2023-11-06 09:06:10', NULL, NULL, 1),
(9, 9, 1248000, 10, 4, '2023-11-07 02:25:56', '2023-11-07 02:25:56', NULL, NULL, 1),
(10, 10, 1150000, 10, 5, '2023-11-07 02:25:56', '2023-11-07 02:25:56', NULL, NULL, 1),
(11, 11, 12222, 10, 0, '2023-11-15 10:15:09', '2023-11-15 10:15:09', NULL, NULL, 1),
(12, 12, 668000, 17, 0, '2023-11-15 10:15:31', '2023-11-15 10:15:31', NULL, NULL, 1),
(13, 15, 810000, 10, 0, '2023-11-16 04:00:49', '2023-11-16 04:00:49', NULL, NULL, 1),
(14, 16, 1980000, 10, 0, '2023-11-16 04:01:20', '2023-11-16 04:01:20', NULL, NULL, 1),
(15, 17, 950000, 10, 0, '2023-11-16 04:01:44', '2023-11-16 04:01:44', NULL, NULL, 1),
(16, 18, 409000, 10, 0, '2023-11-16 04:02:15', '2023-11-16 04:02:15', NULL, NULL, 1),
(17, 19, 1550000, 10, 0, '2023-11-16 04:02:39', '2023-11-16 04:02:39', NULL, NULL, 1),
(18, 20, 1300000, 10, 0, '2023-11-16 04:03:11', '2023-11-16 04:03:11', NULL, NULL, 1),
(19, 21, 650000, 10, 0, '2023-11-16 04:03:36', '2023-11-16 04:03:36', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sale_id`
--

CREATE TABLE `sale_id` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT 'a',
  `short_description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `percent_sale` int(12) NOT NULL DEFAULT 1,
  `price_sale` double(15,1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `sale_id`
--

INSERT INTO `sale_id` (`id`, `name`, `short_description`, `image`, `percent_sale`, `price_sale`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'abc', 'abc', 'abc.jpg', 1, 1250000.0, '2023-11-06 02:55:03', '2023-11-06 02:55:03', 0, 0, 1),
(2, 'acdd', 'abcsd', 'aa.jpg', 1, 270000.0, '2023-11-06 04:11:59', '2023-11-06 04:11:59', NULL, NULL, 1),
(3, 'abcjjjj', 'gggj', 'hjkj.jpg', 1, 210000.0, '2023-11-06 04:31:29', '2023-11-06 04:31:29', NULL, NULL, 1),
(4, 'abc', 'abc', NULL, 1, 1150000.0, '2023-11-16 04:12:26', '2023-11-16 04:12:26', NULL, NULL, 1),
(5, 'product14:', NULL, NULL, 1, 749000.0, '2023-11-16 04:13:57', '2023-11-16 04:13:57', NULL, NULL, 1),
(6, 'product13:', NULL, NULL, 1, 1390000.0, '2023-11-16 04:14:22', '2023-11-16 04:14:22', NULL, NULL, 1),
(7, 'product12:', 'product12:', NULL, 1, 590000.0, '2023-11-16 04:14:47', '2023-11-16 04:14:47', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `single`
--

CREATE TABLE `single` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `detail` varchar(10000) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(10) UNSIGNED NOT NULL,
  `updated_by` int(10) UNSIGNED NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `single`
--

INSERT INTO `single` (`id`, `title`, `detail`, `description`, `image`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Chính sách giao hàng', 'Art Puzzle luôn hướng đến việc cung cấp dịch vụ vận chuyển tốt nhất với mức phí cạnh tranh cho tất cả các đơn hàng mà quý khách đặt với chúng tôi. Chúng tôi hỗ trợ giao hàng trên toàn quốc với chính sách giao hàng cụ thể như sau\n\n1. Quy trình giao nhận hàng\n\nArt Puzzle hợp tác với những đơn vị vận chuyển đáng tin cậy để giao hàng trực tiếp đến quý khách trên phạm vi toàn quốc.\n\nChúng tôi sử dụng dịch vụ Giao Hàng Tiết Kiệm theo tiêu chí, nhanh và rẻ. Đơn hàng của quý khách sẽ được liên hệ và giao tối đa trong 3 lần. Trường hợp lần đầu giao hàng không thành công, sẽ có nhân viên liên hệ để sắp xếp lịch giao hàng lần 2 và 3 với quý khách.\n\nNếu không liên hệ được, chúng tôi sẽ cố gắng liên hệ lại trong 24 giờ tiếp theo (qua thư điện tử hoặc gọi trực tiếp). Trong trường hợp vẫn không thể liên hệ được hoặc không nhận được bất kì phản hồi nào từ phía quý khách, đơn hàng sẽ không còn hiệu lực.\n\nTại thời điểm nhận hàng, quý khách có thể kiểm tra tình trạng, số lượng các sản phẩm trong đơn đặt hàng. Đối với các đơn hàng đã được thanh toán trước, quý khách vui lòng xuất trình giấy tờ tùy thân (CMND hay giấy phép lái xe…) để ghi nhận.\n\n2. Chi phí vận chuyển\n\nFREESHIP toàn quốc với đơn hàng có tổng giá trị thanh toán từ 290.000 đ trở lên.\n\nĐồng giá phí ship 25k cho mọi khu vực trên toàn quốc với đơn hàng có tổng giá trị thanh toàn ít hơn 290.000 đ.\n\n3. Thời gian giao nhận hàng\n\nArt Puzzle sẽ vận chuyển hàng trong thời gian thỏa thuận khi quý khách thực hiện đầy đủ các thủ tục đặt hàng. Thời gian vận chuyển hàng trong vòng 2 – 3 ngày làm việc (không tính chủ nhật hay các ngày lễ Tết). Thời gian nhận hàng từ 1 - 2 ngày đối với nội thành Tp. Hồ Chí Minh và từ 3 - 5 ngày đối với tỉnh thành khác.\n\nXin lưu ý rằng Art Puzzle bảo lưu quyền thay đổi thời gian giao hàng trong một số trường hợp bất khả kháng như thời tiết xấu, điều kiện giao thông không thuận lợi, xe hỏng trên đường giao hàng, trục trặc trong quá trình xuất hàng. Chúng tôi sẽ chủ động liên hệ với khách hàng để thông báo trong những trường hợp trên.\n\nMọi chi tiết xin liên hệ Hotline: 0988 891 692 (Ms. Trinh) hoặc qua Email: artpuzzlevn@gmail.com', 'chinhsach', 'a.jpg', '2023-10-18 10:10:48', '2023-10-18 10:10:48', 0, 0, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `slider`
--

CREATE TABLE `slider` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `link` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `position` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `slider`
--

INSERT INTO `slider` (`id`, `name`, `image`, `link`, `description`, `position`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'slider01', 'slider01.webp', 'aad', '1', 'ffa', '2023-10-04 08:56:25', '2023-10-04 08:56:25', 1, NULL, 1),
(2, 'slider02', 'slider02.webp', 'faf', '1', 'sgg', '2023-10-04 08:56:25', '2023-10-04 08:56:25', 1, NULL, 1),
(3, 'slider03', 'slider03.webp', 'afaf', '1', 'sff', '2023-10-04 08:57:17', '2023-10-04 08:57:17', 1, NULL, 1),
(4, 'gun dam', '.png', 'https://batlua.vn/', 'âfsf', 'slider_main', '2023-10-26 01:10:36', '2023-10-26 01:16:55', 1, NULL, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `topic`
--

CREATE TABLE `topic` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `parent_id` int(11) NOT NULL DEFAULT 0,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `sort_order` int(11) UNSIGNED NOT NULL,
  `description` varchar(1000) NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `topic`
--

INSERT INTO `topic` (`id`, `parent_id`, `name`, `slug`, `sort_order`, `description`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 0, 'Chương trình ưu đãi', 'chuong-trinh-uu-dai', 1, 'Chương trình ưu đãi', 'a', 'faf', NULL, NULL, 1, NULL, 1),
(2, 0, 'Back to school Giảm giá đến 50%', 'back-to-school', 1, 'Back to school Giảm giá đến 50%', 'Back to school Giảm giá đến 50%', 'Back to school Giảm giá đến 50%', NULL, NULL, 1, NULL, 1),
(4, 0, 'gun damfa', 'gun-damfa', 0, 'âffa', 'fafafa', 'âfaf', '2023-10-26 04:43:44', '2023-10-26 04:43:55', 1, NULL, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `roles` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `name`, `phone`, `gender`, `email`, `username`, `password`, `address`, `image`, `roles`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(2, 'vu01', '5266', 'nam', 'a@gmail.com', 'vu45', '1213', 'fsgsg', 'D:\\xampp\\tmp\\php8E4D.tmp', 'user', '2023-10-11 04:56:33', '2023-10-11 04:56:33', 1, NULL, 1),
(3, 'vu01', '5266', 'nam', 'a@gmail.com', 'vu45', '1213', 'fsgsg', 'vu01.png', 'admin', '2023-10-25 23:45:02', '2023-10-25 23:45:02', 1, NULL, 1),
(4, 'vu636', '6373737', 'nam', 'vu01@gmail.com', 'user', '123', 'nam', 'avt.jpg', 'admin', '2023-10-11 05:00:55', '2023-10-26 00:08:29', 1, NULL, 2),
(5, 'dgfdgfdh11', '263326634242', '1', 'vu45ffấd', 'ffafsffaf', 'fjfsfsaf', '1', 'dgfdgfdh11.jpg', 'admin', '2023-10-25 23:30:21', '2023-10-25 23:30:21', 1, NULL, 1),
(6, 'Nguyễn hoàng vũ11', '03225252', 'nam', 'vu@gmail.com', 'vùfa', '123', 'gun dam', 'Nguyễn hoàng vũ11.png', 'admin', '2023-10-25 23:30:33', '2023-10-25 23:30:33', 1, NULL, 1),
(7, 'hoang vu', '0868167723', 'nam', 'vu65030@gmail.com', 'hoangvu', '12345', 'adafae', 'a.jpg', 'admin', NULL, NULL, 1, NULL, 1),
(8, 'vu', '0924242', 'nam', 'vu1231@gmail.com', 'vuu', '123', 'âfa', 'a.jpg', 'admin', NULL, NULL, 1, NULL, 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `coment_rating`
--
ALTER TABLE `coment_rating`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `config`
--
ALTER TABLE `config`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product_sale`
--
ALTER TABLE `product_sale`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product_store`
--
ALTER TABLE `product_store`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sale_id`
--
ALTER TABLE `sale_id`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `single`
--
ALTER TABLE `single`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `topic`
--
ALTER TABLE `topic`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `brand`
--
ALTER TABLE `brand`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT cho bảng `coment_rating`
--
ALTER TABLE `coment_rating`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT cho bảng `config`
--
ALTER TABLE `config`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `contact`
--
ALTER TABLE `contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `menu`
--
ALTER TABLE `menu`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `order`
--
ALTER TABLE `order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `orderdetail`
--
ALTER TABLE `orderdetail`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `post`
--
ALTER TABLE `post`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `product_sale`
--
ALTER TABLE `product_sale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `product_store`
--
ALTER TABLE `product_store`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT cho bảng `sale_id`
--
ALTER TABLE `sale_id`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `single`
--
ALTER TABLE `single`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `slider`
--
ALTER TABLE `slider`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `topic`
--
ALTER TABLE `topic`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
