
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />

        {/* <!-- Thêm link CSS --> */}
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

        {/* <!-- ... --> */}
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryservice from "../../../services/CategoryService";
import ListBrand from "./ListBrand";
function ListCategory() {
    const [parent_cat, set_parent_cat] = React.useState([]);
    const [childrent_cat, set_childrent_cat] = React.useState([]);
    const [collapseCount, setCollapseCount] = useState(1);
    const [collapseIndex, setCollapseIndex] = useState(1);
   
    useEffect(() => {
        const fetchData = async () => {
          try {
            const cat = await categoryservice.getCategoryByParentId();
            if (cat.data.success === true) {
              set_parent_cat(cat.data.parent_category);
              set_childrent_cat(cat.data.children_category);
            }
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    return (

       
            <div class="sidebar-category">
                <div class="sidebar-top">
                    <h2 class="sidebar-title">Danh mục sản phẩm</h2>
                </div>
                <ul class="sidebar-menu-category-list">
                    {/* {categories.map(function (category, index) {
                    return <Link key={index} className="text-category" to={'../danh-muc-san-pham/' + category.slug}>{category.name}</Link>;
                })} */}
                    {parent_cat != [] && parent_cat.map((cat, index) => {
                       const collapseId = `collapse${collapseCount + index}`;
                       const collapseTarget = `#${collapseId}`;
                        return (
                            <li class="sidebar-menu-category" key={index}>
                                <button class="sidebar-accordion-menu" >
                                    <div class="menu-title-flex">
                                        <p class="menu-title" data-toggle="collapse" data-target={collapseTarget}>{cat.name}</p>
                                    </div>
                                </button>
                                {/* <ul class="sidebar-submenu-category-list" > */}
                                <li id={collapseId} class="sidebar-submenu-category">
                                    {childrent_cat != [] && childrent_cat.map((cat2, index) => {
                                        if (cat2.parent_id === cat.id) {

                                            return (

                                                <Link to={"/danh-muc-san-pham/" + cat2.slug} key={index}>{cat2.name}</Link>

                                            );
                                        }

                                    })}
                                </li>
                                {/* </ul> */}
                            </li>
                        );

                    })
                    }

                </ul>
                
            </div>
           
       
        


    );
}

export default ListCategory;