-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 11, 2023 lúc 03:15 PM
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
(1, 'gun dam', '', 'a.jpg', 1, 'aa', 'a', NULL, NULL, 1, NULL, 2);

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
(1, 'Mô hình Gundam', '', 'a.jpg', 0, 1, 'categorymain', 'Mô hình Gundam', 'Mô hình Gundam', '2023-10-02 08:54:51', '2023-10-02 08:54:51', 1, NULL, 1),
(2, 'Mô hình Anime', '', 'aca.jpg', 0, 1, 'ac', 'Mô hình Anime', 'Mô hình Anime', '2023-10-02 09:49:30', '2023-10-02 09:49:30', 1, NULL, 1),
(3, 'Mô hình Lắp ráp', '', 'aaa.jpg', 0, 1, 'aa', 'Mô hình Lắp ráp', 'Mô hình Lắp ráp', '2023-10-02 09:49:30', '2023-10-02 09:49:30', 1, NULL, 1),
(7, 'Gundam giá rẻ', '', 's.jpg', 1, 1, 'categorymain', 'Gundam giá rẻ', 'Gundam giá rẻ', '2023-06-02 08:48:06', '2023-10-02 08:54:51', 1, NULL, 1),
(8, 'Gundam Bandai', '', 'as.jpg', 1, 1, 'a', 'Gundam Bandai', 'Gundam Bandai', '2023-10-02 09:42:53', '2023-10-02 09:42:53', 1, NULL, 1),
(9, 'HG Gundam ( High Grade )', '', 'av.jpg', 1, 1, 'ac', 'HG Gundam ( High Grade )', 'HG Gundam ( High Grade )', '2023-10-02 09:42:53', '2023-10-02 09:42:53', 1, NULL, 1),
(10, 'OnePiece', '', 'avb', 2, 1, 'sfsf', 'OnePiece', 'OnePiece', '2023-10-02 09:53:11', '2023-10-02 09:53:11', 1, NULL, 1),
(11, 'Naruto', '', 'dhd', 2, 1, 'sfs', 'Naruto', 'Naruto', '2023-10-02 09:53:11', '2023-10-02 09:53:11', 1, NULL, 1),
(12, 'Dragon Ball', '', 'sfa', 2, 1, 'ssg', 'Dragon Ball', 'Dragon Ball', '2023-10-02 09:54:27', '2023-10-02 09:54:27', 1, NULL, 1),
(13, 'Genshin Impact', '', 'acvb', 2, 1, 'nj', 'Genshin Impact', 'Genshin Impact', '2023-10-02 09:55:01', '2023-10-02 09:55:01', 1, NULL, 1),
(14, 'Kimetsu no Yaiba', '', 'jk', 2, 1, 'nh', 'Kimetsu no Yaiba', 'Kimetsu no Yaiba', '2023-10-02 09:55:34', '2023-10-02 09:55:34', 1, NULL, 1),
(15, 'Máy bay', '', 'rru', 3, 1, 'sggs', 'Máy bay', 'Máy bay', '2023-10-02 09:56:04', '2023-10-02 09:56:04', 1, NULL, 1),
(16, 'Xe máy', '', 'nhjd', 3, 1, 'itit', 'Xe máy', 'Xe máy', '2023-10-02 09:56:35', '2023-10-02 09:56:35', 1, NULL, 1),
(17, 'Thuyền', '', 'ui', 3, 1, 'uuy', 'Thuyền', 'Thuyền', '2023-10-02 09:57:09', '2023-10-02 09:57:09', 1, NULL, 1),
(18, 'Mô hình kiến trúc', '', 'ot', 3, 1, 'ds', 'Mô hình kiến trúc', 'Mô hình kiến trúc', '2023-10-02 09:57:44', '2023-10-02 09:57:44', 1, NULL, 1),
(19, 'Mô hình lắp ráp khác', '', 'pt', 3, 1, 'đs', 'Mô hình lắp ráp khác', 'Mô hình lắp ráp khác', '2023-10-02 09:58:18', '2023-10-02 09:58:18', 1, NULL, 1);

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
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` mediumtext NOT NULL,
  `replay_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(7, 'Sản phẩm theo danh mục', '', 2, 1, 'mainmenu', 'int', '2023-10-04 10:40:57', '2023-10-04 10:40:57', 1, NULL, 1, 0),
(8, 'Sản phẩm theo thương hiệu', '', 2, 1, 'mainmenu', 'int', '2023-10-04 10:41:43', '2023-10-04 10:41:43', 1, NULL, 1, 0),
(9, 'Thương hiệu', '/thuong-hieu', 0, 1, 'mainmenu', 'int', '2023-10-10 06:40:03', '2023-10-10 06:40:03', 1, NULL, 1, 1),
(11, 'Robotime', '/thuong-hieu/robotime', 9, 1, 'mainmenu', 'int', '2023-10-10 06:43:09', '2023-10-10 06:43:09', 1, NULL, 1, 1),
(12, 'Juhang', '/thuong-hieu/juhang', 9, 1, 'mainmenu', 'int', '2023-10-10 06:43:09', '2023-10-10 06:43:09', 1, NULL, 1, 1);

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
  `created_by` int(11) NOT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orderdetail`
--

CREATE TABLE `orderdetail` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `price` double(8,2) NOT NULL,
  `discount` double(10,2) NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `amount` double(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
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
(1, 1, 'MUA 2 TẶNG 1 - Mừng quốc tế thiếu nhi 1/6', '', 'Giảm giá đến 50% với tất cả sản phẩm mô hình kim loại 3D, mô hình ốc vít 3D, mô hình gỗ 3D, mô hình nhựa 3D, mô hình giấy 3D tại Art Puzzle. Giá sản phẩm tại website là giá đã giảm...', 'blog02.webp', 'By Toto News / 19 Tháng 9, 2023', '', 'MUA 2 TẶNG 1 - Mừng quốc tế thiếu nhi 1/6', 'MUA 2 TẶNG 1 - Mừng quốc tế thiếu nhi 1/6', '2023-10-02 13:29:23', '2023-10-02 13:29:23', 1, NULL, 1),
(2, 1, 'Back to School - Super Sale giảm đến 50%', '', 'Back to School - Super Sale giảm đến 50%', 'blog01.webp', 'By Toto News / 19 Tháng 9, 2023', '', 'Back to School - Super Sale giảm đến 50%', 'Back to School - Super Sale giảm đến 50%', '2023-10-02 13:47:57', '2023-10-02 13:47:57', 1, NULL, 1),
(3, 1, 'Papercraft là gì & cách làm mô hình Gundam bằng giấy', '', 'Papercraft là gì & cách làm mô hình Gundam bằng giấy', 'blog03.webp', 'By Toto News / 19 Tháng 9, 2023', '', 'By Toto News / 19 Tháng 9, 2023', 'By Toto News / 19 Tháng 9, 2023', '2023-10-02 13:47:57', '2023-10-02 13:47:57', 1, NULL, 1),
(4, 1, 'Dân chơi mô hình sống “flex” thế nào?', '', 'Dân chơi mô hình sống “flex” thế nào?', 'blog04.webp', 'By Toto News / 19 Tháng 9, 2023', '', 'Dân chơi mô hình sống “flex” thế nào?', 'Dân chơi mô hình sống “flex” thế nào?', '2023-10-02 13:49:35', '2023-10-02 13:49:35', 1, NULL, 1);

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
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `category_id`, `brand_id`, `name`, `slug`, `price`, `price_sale`, `image`, `detail`, `description`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 1, 1, 'Mô Hình Kim Loại 3D Lắp Ráp Gumdam', 'mo-hinh-kim-loai-3d-lap-rap-gundam', 1248000.0, 1375000.0, 'product01.webp', 'P-Bandai RG RX-93 Nu Gundam Clear Color\r\nSản phẩm không bao gồm giá đỡ mô hình (Action Base is not included).\r\nSản phẩm nhựa cao cấp với độ sắc nét cao, an toàn cho người chơi\r\nMô hình lắp ráp rèn luyện tính kiên nhẫn, khéo léo.\r\nCác khớp cử động linh hoạt theo ý muốn.', '', 'Mô Hình Kim Loại 3D Lắp Ráp Gumdam', 'Mô Hình Kim Loại 3D Lắp Ráp Gumdam', '2023-10-04 06:15:29', '2023-10-04 06:15:29', 1, NULL, 4),
(2, 1, 1, 'Mô Hình Kim Loại Lắp Ráp 3D Piececool Sky Dominator HP095-GBK – MP341', 'mo-hinh-kim-loai-lap-rap-3d-piececool-sky-dominator-hp095-gbk-mp341', 1050000.0, 1375000.0, 'product07.webp', 'Mã sản phẩm: MP341\r\nChất liệu: Thép không rỉ inox 430, đồng thau\r\nKích thước (Dài*Rộng*Cao): 20 X 19.5 X 22.3CM\r\nĐộ khó: 7/10\r\nMảnh ghép: 489\r\nHãng sản xuất: Piececool\r\nPhù hợp độ tuổi: 14+\r\nDụng cụ cần thiết: Kìm cắt, kìm nhọn, nhíp, bộ uốn\r\nHướng dẫn lắp ráp mô hình chi tiết, dễ hiểu', '', 'Mô Hình Kim Loại Lắp Ráp 3D Piececool Sky Dominator HP095-GBK – MP341', 'Mô Hình Kim Loại Lắp Ráp 3D Piececool Sky Dominator HP095-GBK – MP341', '2023-10-04 06:15:29', '2023-10-04 06:15:29', 1, NULL, 4),
(3, 1, 1, 'Mô Hình Kim Loại 3D Lắp Ráp Piececool Marvel The Hulk Buster IP014-RG - MP908', 'mo-hinh-kim-loai-3d-lap-rap-piececool-marvel-the-hulk-buster-ip014-rg-mp908', 2050000.0, 2050000.0, 'product08.webp', 'Mã sản phẩm: MP908\r\nChất liệu: Thép không rỉ inox 430, đồng thau\r\nKích thước (Dài*Rộng*Cao): 18 X 11 X 24 CM\r\nĐộ khó: 10/10\r\nMảnh ghép: 629\r\nHãng sản xuất: Piececool\r\nPhù hợp độ tuổi: 14+\r\nDụng cụ cần thiết: Kìm cắt, kìm nhọn, nhíp, bộ uốn\r\nHướng dẫn lắp ráp mô hình chi tiết, dễ hiểu', '', 'Mô Hình Kim Loại 3D Lắp Ráp Piececool Marvel The Hulk Buster IP014-RG - MP908', 'Mô Hình Kim Loại 3D Lắp Ráp Piececool Marvel The Hulk Buster IP014-RG - MP908', '2023-10-04 06:18:49', '2023-10-04 06:18:49', 1, NULL, 4),
(4, 3, 1, 'Mô Hình Kim Loại Lắp Ráp 3D Microworld Đào Hoa Nguyên (285 mảnh, Peach Blossom Source) J076 - MP1181', 'mo-hinh-kim-loai-rap-lap-3d-microworl-dao-hoa-nguyen-j076-mp1181', 950000.0, 1250000.0, 'product02.webp', 'Mã sản phẩm: MP1181\r\nChất liệu: Thép không rỉ inox 430, đồng thau\r\nKích thước (Dài*Rộng*Cao): 20.5 x 11.5 x 20.5 CM\r\nĐộ khó: 5/10\r\nMảnh ghép: 285\r\nHãng sản xuất: Microworld\r\nPhù hợp độ tuổi: 14+\r\nDụng cụ cần thiết: Kìm cắt, kìm nhọn, nhíp, bộ uốn\r\nHướng dẫn lắp ráp mô hình chi tiết, dễ hiểu', '', 'Mô Hình Kim Loại Lắp Ráp 3D Microworld Đào Hoa Nguyên (285 mảnh, Peach Blossom Source) J076 - MP1181', 'Mô Hình Kim Loại Lắp Ráp 3D Microworld Đào Hoa Nguyên (285 mảnh, Peach Blossom Source) J076 - MP1181', '2023-10-04 06:33:13', '2023-10-04 06:33:13', 1, NULL, 4),
(5, 1, 1, 'Mô Hình Kim Loại Lắp Ráp 3D Piececool Cung Thiên Phúc (540 mảnh, Tianfu Palace) P314-GN - MP1177', 'mo-hinh-kim-loai-lap-rap-3d-piececool-cung-thien-phuc-p314-gn-mp1177', 1155000.0, NULL, 'product03.jpg', 'Mã sản phẩm: MP1177\r\nChất liệu: Thép không rỉ inox 430, đồng thau\r\nKích thước (Dài*Rộng*Cao): 23x15x28.5 cm\r\nĐộ khó: 6/10\r\nMảnh ghép: 540\r\nHãng sản xuất: Piececool\r\nPhù hợp độ tuổi: 14+\r\nDụng cụ cần thiết: Kìm cắt, kìm nhọn, nhíp, bộ uốn\r\nHướng dẫn lắp ráp mô hình chi tiết, dễ hiểu', '', 'Mô Hình Kim Loại Lắp Ráp 3D Piececool Cung Thiên Phúc (540 mảnh, Tianfu Palace) P314-GN - MP1177', 'Mô Hình Kim Loại Lắp Ráp 3D Piececool Cung Thiên Phúc (540 mảnh, Tianfu Palace) P314-GN - MP1177', '2023-10-04 06:33:13', '2023-10-04 06:33:13', 1, NULL, 3),
(6, 1, 1, 'Mô Hình Kim Loại Lắp Ráp 3D Piececool Tàu Titanic (226 mảnh) HP300-KW - MP1175', 'mo-hinh-kim-loai-lap-rap-3d-piececool-tau-titanic-hp200-kw-mp1175', 475000.0, 680000.0, 'product04.webp', 'Mã sản phẩm: MP1175\r\nChất liệu: Thép không rỉ inox 430, đồng thau\r\nKích thước (Dài*Rộng*Cao): 25.5x3.8x12.6 cm\r\nĐộ khó: 4/10\r\nMảnh ghép: 226\r\nHãng sản xuất: Piececool\r\nPhù hợp độ tuổi: 14+\r\nDụng cụ cần thiết: Kìm cắt, kìm nhọn, nhíp, bộ uốn\r\nHướng dẫn lắp ráp mô hình chi tiết, dễ hiểu', '', 'Mô Hình Kim Loại Lắp Ráp 3D Piececool Tàu Titanic (226 mảnh) HP300-KW - MP1175', 'Mô Hình Kim Loại Lắp Ráp 3D Piececool Tàu Titanic (226 mảnh) HP300-KW - MP1175', '2023-10-04 06:46:08', '2023-10-04 06:46:08', 1, NULL, 3),
(7, 1, 1, 'Mô Hình Kim Loại Lắp Ráp 3D Piececool Tàu Hoàng Gia Tây Ban Nha Silent Mary (363 mảnh) HP315-KS - MP1176', 'mo-hinh-kim-loai-rap-rap-3d-piececool-tau-hoang-gia-tay-ban-nha-silent-mary-hp315-ks-mp1176', 599000.0, 599000.0, 'product05.jpg', 'Mã sản phẩm: MP1176\r\nChất liệu: Thép không rỉ inox 430, đồng thau\r\nKích thước (Dài*Rộng*Cao): 23.5x12.5x21 cm\r\nĐộ khó: 5/10\r\nMảnh ghép: 363\r\nHãng sản xuất: Piececool\r\nPhù hợp độ tuổi: 14+\r\nDụng cụ cần thiết: Kìm cắt, kìm nhọn, nhíp, bộ uốn\r\nHướng dẫn lắp ráp mô hình chi tiết, dễ hiểu', '', 'Mô Hình Kim Loại Lắp Ráp 3D Piececool Tàu Hoàng Gia Tây Ban Nha Silent Mary (363 mảnh) HP315-KS - MP1176', 'Mô Hình Kim Loại Lắp Ráp 3D Piececool Tàu Hoàng Gia Tây Ban Nha Silent Mary (363 mảnh) HP315-KS - MP1176', '2023-10-04 06:50:01', '2023-10-04 06:50:01', 1, NULL, 3),
(8, 1, 1, 'Mô Hình Kim Loại Lắp Ráp 3D Microworld Nhà Thờ Sagrada Família (311 mảnh) J072 - MP1170', 'mo-hinh-kim-loai-lap-rap-3d-microworld-nha-tho-sagrada-familia-j071-mp1170', 1150000.0, 1150000.0, 'product06.jpg', 'Mã sản phẩm: MP1170\r\nChất liệu: Thép không rỉ inox 430, đồng thau\r\nKích thước (Dài*Rộng*Cao): 12x9.8x16.2 cm\r\nĐộ khó: 6/10\r\nMảnh ghép: 311\r\nHãng sản xuất: Microworld\r\nPhù hợp độ tuổi: 14+\r\nDụng cụ cần thiết: Kìm cắt, kìm nhọn, nhíp, bộ uốn\r\nHướng dẫn lắp ráp mô hình chi tiết, dễ hiểu', '', 'Mô Hình Kim Loại Lắp Ráp 3D Microworld Nhà Thờ Sagrada Família (311 mảnh) J072 - MP1170', 'Mô Hình Kim Loại Lắp Ráp 3D Microworld Nhà Thờ Sagrada Família (311 mảnh) J072 - MP1170', '2023-10-04 06:50:01', '2023-10-04 06:50:01', 1, NULL, 3),
(9, 1, 1, 'Mô Hình Kim Loại Lắp Ráp 3D Metal Head HALO Master Chief Helmet – MP1092', 'mo-hinh-kim-loai-lap-rap-3d-metal-head-halo-master-chief-helmet-mp1092', 48000.0, 59000.0, 'product09.jpg', 'Mã sản phẩm: MP1092\r\nChất liệu: Thép không rỉ inox 430, đồng thau\r\nKích thước (Dài*Rộng*Cao): 3.81 X 4.45 X 3.81 CM\r\nĐộ khó: 2/10\r\nMảnh ghép: 50\r\nHãng sản xuất: Metal Head\r\nPhù hợp độ tuổi: 14+\r\nDụng cụ cần thiết: Kìm cắt, kìm nhọn, nhíp, bộ uốn\r\nHướng dẫn lắp ráp mô hình chi tiết, dễ hiểu', '', 'Mô Hình Kim Loại Lắp Ráp 3D Metal Head HALO Master Chief Helmet – MP1092', 'Mô Hình Kim Loại Lắp Ráp 3D Metal Head HALO Master Chief Helmet – MP1092', '2023-10-04 06:53:14', '2023-10-04 06:53:14', 1, NULL, 5),
(10, 1, 1, 'Mô Hình Gỗ 3D Lắp Ráp ROBOTIME Xe Hơi Cổ Điển Vintage Car TG504 – WP186', 'mo-hinh-go-3d-lap-rap-robotime-xe-hoi-co-dien-vintage-car-tg504-wp186', 208000.0, 285000.0, 'product10.webp', 'Mã sản phẩm: WP186\r\nChất liệu: Gỗ ép, vải, nhựa\r\nKích thước (Dài*Rộng*Cao): 16 X 7 X 8 CM\r\nĐộ khó: 3/10\r\nMảnh ghép: 92\r\nHãng sản xuất: Robotime\r\nPhù hợp độ tuổi: 14+\r\nDụng cụ cần thiết: Kìm cắt, kìm nhọn, nhíp, bộ uốn\r\nHướng dẫn lắp ráp mô hình chi tiết, dễ hiểu', '', 'Mô Hình Gỗ 3D Lắp Ráp ROBOTIME Xe Hơi Cổ Điển Vintage Car TG504 – WP186', 'Mô Hình Gỗ 3D Lắp Ráp ROBOTIME Xe Hơi Cổ Điển Vintage Car TG504 – WP186', '2023-10-04 06:53:14', '2023-10-04 06:53:14', 1, NULL, 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_sale`
--

CREATE TABLE `product_sale` (
  `id` int(11) NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `pricesale` double(10,1) NOT NULL,
  `qty` int(11) NOT NULL,
  `date_begin` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(10) UNSIGNED DEFAULT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_store`
--

CREATE TABLE `product_store` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `price` double NOT NULL,
  `qty` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(10) UNSIGNED DEFAULT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(3, 'slider03', 'slider03.webp', 'afaf', '1', 'sff', '2023-10-04 08:57:17', '2023-10-04 08:57:17', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `topic`
--

CREATE TABLE `topic` (
  `id` bigint(20) UNSIGNED NOT NULL,
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

INSERT INTO `topic` (`id`, `name`, `slug`, `sort_order`, `description`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'acd', '', 0, '', 'àa', 'faf', NULL, NULL, 1, NULL, 1);

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
(1, 'vu', '1900', '', 'vu@gmail.com', 'vu', '123', 'aac', 'a.jpg', 'user', '2023-10-10 07:25:08', '2023-10-10 07:25:08', 1, NULL, 1),
(2, 'vu01', '5266', 'nam', 'a@gmail.com', 'vu45', '1213', 'fsgsg', 'D:\\xampp\\tmp\\php8E4D.tmp', 'user', '2023-10-11 04:56:33', '2023-10-11 04:56:33', 1, NULL, 1),
(3, 'vu01', '5266', 'nam', 'a@gmail.com', 'vu45', '1213', 'fsgsg', 'D:\\xampp\\tmp\\phpDAB8.tmp', 'user', '2023-10-11 04:56:53', '2023-10-11 04:56:53', 1, NULL, 1),
(4, 'vu636', '6373737', 'nam', 'vu01@gmail.com', 'user', '123', 'nam', 'avt.jpg', 'user', '2023-10-11 05:00:55', '2023-10-11 05:00:55', 1, NULL, 1);

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT cho bảng `config`
--
ALTER TABLE `config`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `contact`
--
ALTER TABLE `contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `menu`
--
ALTER TABLE `menu`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `order`
--
ALTER TABLE `order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `orderdetail`
--
ALTER TABLE `orderdetail`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `post`
--
ALTER TABLE `post`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `product_sale`
--
ALTER TABLE `product_sale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `product_store`
--
ALTER TABLE `product_store`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `slider`
--
ALTER TABLE `slider`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `topic`
--
ALTER TABLE `topic`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
