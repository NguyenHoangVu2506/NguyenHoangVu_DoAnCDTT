
// /*Thương hiệu*/
import Brand_Create from "../pages/backend/Brand/Brand_Create";
import Brand_List from "../pages/backend/Brand/Brand_List";
import Brand_Show from "../pages/backend/Brand/Brand_Show";
import Brand_Trash from "../pages/backend/Brand/Brand_Trash";
import Brand_Update from "../pages/backend/Brand/Brand_Update";
import Category_Create from "../pages/backend/Category/Category_Create";
import Category_List from "../pages/backend/Category/Category_List";
import Category_Show from "../pages/backend/Category/Category_Show";
import Category_Trash from "../pages/backend/Category/Category_Trash";
import Category_Update from "../pages/backend/Category/Category_Update";
import Contact_Create from "../pages/backend/Contact/Contact_Create";
import Contact_List from "../pages/backend/Contact/Contact_List";
import Contact_Show from "../pages/backend/Contact/Contact_Show";
import Contact_Trash from "../pages/backend/Contact/Contact_Trash";
import Contact_Update from "../pages/backend/Contact/Contact_Update";
import Customer_Create from "../pages/backend/Customer/Customer_Create";
import Customer_List from "../pages/backend/Customer/Customer_List";
import Customer_Show from "../pages/backend/Customer/Customer_Show";
import Customer_Trash from "../pages/backend/Customer/Customer_Trash";
import Customer_Update from "../pages/backend/Customer/Customer_Update";

import DashBoard from "../pages/backend/Dashboard";
import Order_List from "../pages/backend/Order/Order_List";
import Order_Show from "../pages/backend/Order/Order_Show";
import Order_Trash from "../pages/backend/Order/Order_Trash";
import Pages_Create from "../pages/backend/Pages/Pages_Create";
import Pages_List from "../pages/backend/Pages/Pages_List";
import Pages_Show from "../pages/backend/Pages/Pages_Show";
import Pages_Trash from "../pages/backend/Pages/Pages_Trash";
import Pages_Update from "../pages/backend/Pages/Pages_Update";
import Post_Create from "../pages/backend/Post/Post_Create";
import Post_List from "../pages/backend/Post/Post_List";
import Post_Show from "../pages/backend/Post/Post_Show";
import Post_Trash from "../pages/backend/Post/Post_Trash";
import Post_Update from "../pages/backend/Post/Post_Update";
import Product_Create from "../pages/backend/Product/Product_Create";
import Product_List from "../pages/backend/Product/Product_List";
import Product_Show from "../pages/backend/Product/Product_Show";
import Product_Trash from "../pages/backend/Product/Product_Trash";
import Product_Update from "../pages/backend/Product/Product_Update";
import SaleProduct_Create from "../pages/backend/ProductSale/SaleProduct_Create";
import SaleProduct_List from "../pages/backend/ProductSale/SaleProduct_List";
import StoreProduct_Create from "../pages/backend/ProductStore/StoreProduct_Create";
import StoreProduct_List from "../pages/backend/ProductStore/StoreProduct_List";
import Slider_Create from "../pages/backend/Slider/Slider_Create";
import Slider_List from "../pages/backend/Slider/Slider_List";
import Slider_Show from "../pages/backend/Slider/Slider_Show";
import Slider_Trash from "../pages/backend/Slider/Slider_Trash";
import Slider_Update from "../pages/backend/Slider/Slider_Update";
import Topic_Create from "../pages/backend/Topic/Topic_Create";
import Topic_List from "../pages/backend/Topic/Topic_List";
import Topic_Show from "../pages/backend/Topic/Topic_Show";
import Topic_Trash from "../pages/backend/Topic/Topic_Trash";
import Topic_Update from "../pages/backend/Topic/Topic_Update";
import Login from "../pages/backend/User/Login";
import User_Create from "../pages/backend/User/User_Create";
import User_List from "../pages/backend/User/User_List";
import User_Show from "../pages/backend/User/User_Show";
import User_Trash from "../pages/backend/User/User_Trash";
import User_Update from "../pages/backend/User/User_Update";



const RouterPrivate = [
    { path: "/admin", component: DashBoard },
    /*Thương hiệu*/
    { path: "/admin/brand", component: Brand_List },
    { path: "/admin/brand/create", component: Brand_Create },
    { path: "/admin/brand/update/:id", component: Brand_Update },
    { path: "/admin/brand/show/:id", component: Brand_Show },
    { path: "/admin/brand/trash", component: Brand_Trash },

    /*Danh mục*/
    { path: "/admin/category", component: Category_List },
    { path: "/admin/category/create", component: Category_Create },
    { path: "/admin/category/update/:id", component: Category_Update  },
    { path: "/admin/category/show/:id", component: Category_Show},
    { path: "/admin/category/trash", component: Category_Trash },

    // /*Sản phẩm*/
    { path: "/admin/product", component: Product_List },
    { path: "/admin/product/create", component: Product_Create },
    { path: "/admin/product/update/:id", component: Product_Update },
    { path: "/admin/product/show/:id", component: Product_Show },
    { path: "/admin/product/trash", component: Product_Trash },
    // /*Sản phẩm*/
    { path: "/admin/productstore", component: StoreProduct_List },
    { path: "/admin/productstore/create", component: StoreProduct_Create },

    { path: "/admin/productsale", component: SaleProduct_List },
    { path: "/admin/productsale/create", component: SaleProduct_Create },

    // { path: "/admin/product/update/:id", component: Product_Update },
    // { path: "/admin/product/show/:id", component: Product_Show },
    // { path: "/admin/product/trash", component: Product_Trash },
    /*Menu*/
    // { path: "/admin/menu/create", component: MenuCreate },
    // { path: "/admin/menu/show/:id", component: MenuShow },
    // { path: "/admin/menu/update/:id", component: MenuUpdate },
    // { path: "/admin/menu", component: MenuList },
    /*Contact*/
    { path: "/admin/contact/create", component: Contact_Create },
    { path: "/admin/contact/show/:id", component: Contact_Show },
    { path: "/admin/contact/update/:id", component: Contact_Update },
    { path: "/admin/contact", component: Contact_List },
    { path: "/admin/contact/trash", component: Contact_Trash },

    /*Order*/
    // { path: "/admin/order/show/:id", component: Order_Show },
    { path: "/admin/order", component: Order_List },
    { path: "/admin/order/trash", component: Order_Trash },
    { path: "/admin/orderdetail/show/:id", component: Order_Show },

    /*Post*/
    { path: "/admin/post/create", component: Post_Create },
    { path: "/admin/post/show/:id", component: Post_Show },
    { path: "/admin/post/update/:id", component: Post_Update },
    { path: "/admin/post", component: Post_List },
    { path: "/admin/post/trash", component: Post_Trash },

    /*Slider*/
    { path: "/admin/slider/create", component: Slider_Create },
    { path: "/admin/slider/show/:id", component: Slider_Show },
    { path: "/admin/slider/update/:id", component: Slider_Update },
    { path: "/admin/slider", component: Slider_List },
    { path: "/admin/slider/trash", component: Slider_Trash },

    /*Topic*/
    { path: "/admin/topic/create", component: Topic_Create },
    { path: "/admin/topic/show/:id", component: Topic_Show },
    { path: "/admin/topic/update/:id", component: Topic_Update },
    { path: "/admin/topic", component: Topic_List },
    { path: "/admin/topic/trash", component: Topic_Trash },

    /*User*/
    { path: "/admin/user/create", component: User_Create },
    { path: "/admin/user/show/:id", component: User_Show },
    { path: "/admin/user/update/:id", component: User_Update },
    { path: "/admin/user", component: User_List },
    { path: "/admin/user/trash", component: User_Trash },
    { path: "/admin/login_admin", component: Login },

    /*Customers*/
    { path: "/admin/customer/create", component: Customer_Create },
    { path: "/admin/customer/show/:id", component: Customer_Show },
    { path: "/admin/customer/update/:id", component: Customer_Update },
    { path: "/admin/customer", component: Customer_List },
    { path: "/admin/customer/trash", component: Customer_Trash },

     /*Single*/
     { path: "/admin/pages/create", component: Pages_Create },
     { path: "/admin/pages/show/:id", component: Pages_Show },
     { path: "/admin/pages/update/:id", component: Pages_Update },
     { path: "/admin/pages", component: Pages_List },
     { path: "/admin/pages/trash", component: Pages_Trash },
 

];
export default RouterPrivate;