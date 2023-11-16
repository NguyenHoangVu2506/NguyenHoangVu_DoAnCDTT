import Home from "../layouts/LayoutSite/Home";
import Post from "../pages/frontend/blog/Post";
import PostDetail from "../pages/frontend/blog/PostDetail";
import PostTopic from "../pages/frontend/blog/PostTopic";
import Single_item from "../pages/components/frontend/single_item";
import Contact from "../pages/frontend/page/Contact";
import PageContent from "../pages/frontend/page/PageContent";
import ProductBrand from "../pages/frontend/products/ProductBrand";
import ProductCategory from "../pages/frontend/products/ProductCategory";
import ProductDetail from "../pages/frontend/products/ProductDetail";
import ProductHome from "../pages/frontend/products/ProductHome";
import Login from "../pages/frontend/users/Login";
import Register from "../pages/frontend/users/Register";
import SettingUser from "../pages/frontend/users/SettingUser";
import ShoppingCart from "../pages/frontend/users/ShoppingCart";
import Search_Product from "../pages/frontend/products/Search_Product";


const RouterPublic =[
    {path:"/",component:Home},
    // {path:"/san-pham",component:Product},
    {path:"/chi-tiet/:slug",component:ProductDetail},
    {path:"/chinh-sach/:slug",component:Single_item},

    {path:"/gio-hang",component:ShoppingCart},
    {path:"/dang-ky",component:Register},
    {path:"/dang-nhap",component:Login},
    {path:"/tai-khoan",component:SettingUser},

    {path:"danh-muc-san-pham/:slug",component:ProductCategory},
    {path:"/tat-ca-san-pham",component:ProductHome},
    {path:"/gioi-thieu",component:PageContent},

    {path:"bai-viet/:slug",component:PostTopic},

    {path:"/thuong-hieu-san-pham/:slug",component:ProductBrand},
    {path:"/lien-he",component:Contact},
    {path:"/tin-tuc",component:Post},

    {path:"/chi-tiet-bai-viet/:slug",component:PostDetail},
    // {path:"/admin/contact/create", component: ContactCreate },
    {path:"/pages/tim-kiem/:key",component:Search_Product},


];
export default RouterPublic;