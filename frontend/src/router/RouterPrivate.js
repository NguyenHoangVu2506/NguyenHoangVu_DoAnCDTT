import DashBoard from "../pages/backend/Dashboard";
/*Thương hiệu*/
import BrandCreate from "../pages/backend/Brand/BrandCreate";
import BrandList from "../pages/backend/Brand/BrandList";
import BrandShow from "../pages/backend/Brand/BrandShow";
import BrandUpdate from "../pages/backend/Brand/BrandUpdate";
/*Danh mục*/
import CategoryCreate from "../pages/backend/Category/CategoryCreate";
import CategoryList from "../pages/backend/Category/CategoryList";
import CategoryShow from "../pages/backend/Category/CategoryShow";
import CategoryUpdate from "../pages/backend/Category/CategoryUpdate";
/*Sản phẩm*/
import ProductCreate from "../pages/backend/Product/ProductCreate";
import ProductList from "../pages/backend/Product/ProductList";
import ProductShow from "../pages/backend/Product/ProductShow";
import ProductUpdate from "../pages/backend/Product/ProductUpdate";
/*Menu*/
import MenuCreate from "../pages/backend/Menu/MenuCreate";
import MenuShow from "../pages/backend/Menu/MenuShow";
import MenuUpdate from "../pages/backend/Menu/MenuUpdate";
import MenuList from "../pages/backend/Menu/MenuList";
/*Contact*/
import ContactCreate from "../pages/backend/Contact/ContactCreate";
import ContactShow from "../pages/backend/Contact/ContactShow";
import ContactUpdate from "../pages/backend/Contact/ContactUpdate";
import ContactList from "../pages/backend/Contact/ContactList";
/*Order*/
import OrderCreate from "../pages/backend/Order/OrderCreate";
import OrderShow from "../pages/backend/Order/OrderShow";
import OrderUpdate from "../pages/backend/Order/OrderUpdate";
import OrderList from "../pages/backend/Order/OrderList";
/*Post*/
import PostCreate from "../pages/backend/Post/PostCreate";
import PostShow from "../pages/backend/Post/PostShow";
import PostUpdate from "../pages/backend/Post/PostUpdate";
import PostList from "../pages/backend/Post/PostList";
/*Slider*/
import SliderCreate from "../pages/backend/Slider/SliderCreate";
import SliderShow from "../pages/backend/Slider/SliderShow";
import SliderUpdate from "../pages/backend/Slider/SliderUpdate";
import SliderList from "../pages/backend/Slider/SliderList";
/*Topic*/
import TopicCreate from "../pages/backend/Topic/TopicCreate";
import TopicShow from "../pages/backend/Topic/TopicShow";
import TopicUpdate from "../pages/backend/Topic/TopicUpdate";
import TopicList from "../pages/backend/Topic/TopicList";
/*User*/
import UserCreate from "../pages/backend/User/UserCreate";
import UserShow from "../pages/backend/User/UserShow";
import UserUpdate from "../pages/backend/User/UserUpdate";
import UserList from "../pages/backend/User/UserList";
import User1List from "../pages/backend/User1/UserList";


import SingleUpdate from "../pages/backend/Single/SingleUpdate";
import SingleCreate from "../pages/backend/Single/SingleCreate";
import SingleShow from "../pages/backend/Single/SingleShow";
import SingleList from "../pages/backend/Single/SingleList";

const RouterPrivate = [
    { path: "/admin", component: DashBoard },
    /*Thương hiệu*/
    { path: "/admin/brand", component: BrandList },
    { path: "/admin/brand/create", component: BrandCreate },
    { path: "/admin/brand/update/:id", component: BrandUpdate },
    { path: "/admin/brand/show/:id", component: BrandShow },
    /*Danh mục*/
    { path: "/admin/category", component: CategoryList },
    { path: "/admin/category/create", component: CategoryCreate },
    { path: "/admin/category/update/:id", component: CategoryUpdate  },
    { path: "/admin/category/show/:id", component: CategoryShow},
    /*Sản phẩm*/
    { path: "/admin/product", component: ProductList },
    { path: "/admin/product/create", component: ProductCreate },
    { path: "/admin/product/update/:id", component: ProductUpdate },
    { path: "/admin/product/show/:id", component:  ProductShow},
    /*Menu*/
    { path: "/admin/menu/create", component: MenuCreate },
    { path: "/admin/menu/show/:id", component: MenuShow },
    { path: "/admin/menu/update/:id", component: MenuUpdate },
    { path: "/admin/menu", component: MenuList },
    /*Contact*/
    { path: "/admin/contact/create", component: ContactCreate },
    { path: "/admin/contact/show/:id", component: ContactShow },
    { path: "/admin/contact/update/:id", component: ContactUpdate },
    { path: "/admin/contact", component: ContactList },
    /*Order*/
    { path: "/admin/order/create", component: OrderCreate },
    { path: "/admin/order/show/:id", component: OrderShow },
    { path: "/admin/order/update/:id", component: OrderUpdate },
    { path: "/admin/order", component: OrderList },
    /*Post*/
    { path: "/admin/post/create", component: PostCreate },
    { path: "/admin/post/show/:id", component: PostShow },
    { path: "/admin/post/update/:id", component: PostUpdate },
    { path: "/admin/post", component: PostList },
    /*Slider*/
    { path: "/admin/slider/create", component: SliderCreate },
    { path: "/admin/slider/show/:id", component: SliderShow },
    { path: "/admin/slider/update/:id", component: SliderUpdate },
    { path: "/admin/slider", component: SliderList },
    /*Topic*/
    { path: "/admin/topic/create", component: TopicCreate },
    { path: "/admin/topic/show/:id", component: TopicShow },
    { path: "/admin/topic/update/:id", component: TopicUpdate },
    { path: "/admin/topic", component: TopicList },
    /*User*/
    { path: "/admin/user/create", component: UserCreate },
    { path: "/admin/user/show/:id", component: UserShow },
    { path: "/admin/user/update/:id", component: UserUpdate },
    { path: "/admin/user", component: UserList },
    { path: "/admin/user1", component: User1List },

     /*Single*/
     { path: "/admin/single/create", component: SingleCreate },
     { path: "/admin/single/show/:id", component: SingleShow },
     { path: "/admin/single/update/:id", component: SingleUpdate },
     { path: "/admin/single", component: SingleList },

];
export default RouterPrivate;