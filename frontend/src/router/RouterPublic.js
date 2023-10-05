import ContactCreate from "../pages/backend/Contact/ContactCreate";
import Contact from "../pages/frontend/Contact/Contact";
import Home from "../pages/frontend/Home/Home";
import New from "../pages/frontend/New/New";
import PostDetail from "../pages/frontend/New/PostDetail";
import PostTopic from "../pages/frontend/New/PostTopic";
import Product from "../pages/frontend/Product/Product";
import ProductBrand from "../pages/frontend/Product/ProductBrand";
import ProductCategory from "../pages/frontend/Product/ProductCategory";
import ProductDetail from "../pages/frontend/Product/ProductDetail";
import DeliveryPolicy from "../pages/frontend/Single/DeliveryPolicy";
import PurchasePolicy from "../pages/frontend/Single/PurchasePolicy";
import ReturnPolicy from "../pages/frontend/Single/ReturnPolicy";
import WarrantyPolicy from "../pages/frontend/Single/WarrantyPolicy";


const RouterPublic =[
    {path:"/",component:Home},
    {path:"/san-pham",component:Product},
    {path:"/chi-tiet/:slug",component:ProductDetail},
    {path:"danh-muc-san-pham/:slug",component:ProductCategory},

    {path:"danh-muc-bai-viet/:slug",component:PostTopic},

    {path:"/thuong-hieu/:slug",component:ProductBrand},
    {path:"/lien-he",component:Contact},

    {path:"/tin-tuc",component:New},

    {path:"/chi-tiet-bai-viet/:slug",component:PostDetail},
    {path:"/chinh-sach/:slug",component:ProductBrand},
    {path:"/chinh-sach-mua-hang",component:PurchasePolicy},
    {path:"/chinh-sach-giao-hang",component:DeliveryPolicy},
    {path:"/chinh-sach-bao-hanh",component:WarrantyPolicy},
    {path:"/chinh-sach-doi-tra",component:ReturnPolicy},
    {path:"/admin/contact/create", component: ContactCreate },


];
export default RouterPublic;