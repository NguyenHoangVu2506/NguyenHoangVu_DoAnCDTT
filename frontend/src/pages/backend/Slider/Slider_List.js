import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sliderservice from "../../../services/SliderService";
import { urlImage } from "../../../config";

function Slider_List() {
    const [slider,setSlider] = useState([]);
    const [count_slider,setCountSlider] = useState(0);
    const [count_trash,setCountTrash] = useState(0);
    const [tamp,setTamp] = useState(0);

    useEffect(()=>{
        (async ()=>{
            await sliderservice.getAll().then((res)=>{
                setSlider(res.data.sliders);
                setCountSlider(res.data.count_slider);
                setCountTrash(res.data.count_trash);
            })
        })()
    },[tamp])

    function sliderTrash(id) {
        sliderservice.deleteTrash(id).then(function (result) {
            alert(result.data.message);
            setTamp(id);
        })
    }

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-10">
                            <h1 className="d-inline">Danh sách banner <sup style={{fontSize:"14px"}}>({count_slider})</sup></h1>
                        </div>
                        <div className="col-sm-2 text-right ">
                            <div className="d-flex ms-5">
                                <Link to="/admin/slider/create" className="btn btn-sm btn-primary me-3 ">
                                    <i className="fa fa-plus me-1" aria-hidden="true"></i>
                                    Thêm
                                </Link>
                                <Link to="/admin/slider/trash" className="action-btn" style={{ color: "red" }}>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                    <sup className="count ms-1">{count_trash}</sup>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="content">
                <div className="card">
                    <div className="card-header">
                        Noi dung
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered" id="mytable">
                            <thead>
                                <tr>
                                    <th className="text-center" style={{ width: "30px" }}>
                                        <input type="checkbox" />
                                    </th>
                                    <th className="text-center" style={{ width: "130px" }}>Hình ảnh</th>
                                    <th>Tên banner</th>
                                    <th>Liên kết</th>
                                </tr>
                            </thead>
                            <tbody>
                                {slider.map((sli)=>{
                                    return(
                                        <tr className="datarow" key={sli.id}>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td>
                                            <img className="img-fluid" src={urlImage + "Slider/" + sli.image} alt="banner.jpg" />
                                        </td>
                                        <td>
                                            <div className="name">
                                                {sli.name}
                                            </div>
                                            <div className="function_style d-flex" style={{fontSize:"14px"}}>
                                                <a href="#" style={{ margin: "0px 2px" }} className="">Hiện</a> |
                                                <Link to={`/admin/slider/update/${sli.id}`} style={{ margin: "0px 2px" }}><i className="fas fa-edit"></i> Chỉnh sửa</Link> |
                                                <Link to={`/admin/slider/show/${sli.id}`} style={{ margin: "0px 2px" }}><i className="fa fa-eye"></i> Chi tiết</Link> |
                                                <button onClick={() => sliderTrash(sli.id)} style={{ margin: "0px 2px" }}><i className="fa fa-trash"></i> Xoá</button>
                                            </div>
                                        </td>
                                        <td>{sli.link}</td>
                                    </tr>
    
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Slider_List;