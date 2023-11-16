import React from "react";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import sliderservice from "../../../services/SliderService";

function Slider_Create() {
    const navigate = useNavigate();
    const [sliders,setSliders] = useState([]);
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [link,setLink] = useState('');
    const [sub_title,setSubTitle] = useState('');
    const [sort_order,setSortOrder] = useState(0);
    const [position,setPosition] = useState('');
    const [status,setStatus] = useState(2);

    useEffect(()=>{
        (async ()=>{
            await sliderservice.getAll().then((res)=>{
                setSliders(res.data.sliders);
            })
        })()
    },[])

    async function sliderStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var slider = new FormData();
        slider.append("name", name);
        slider.append("description", description);
        slider.append("link", link);
        slider.append("sub_title", sub_title);
        slider.append("position", position);
        slider.append("sort_order", sort_order);
        slider.append("status", status);
        slider.append("image", image.files[0]);

        await sliderservice.create(slider).then(function (res) {
            alert(res.data.message);
            navigate('/admin/slider', { replace: true });
        })
    }


    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-12">
                            <h1 className="d-inline">Thêm mới banner</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <form onSubmit={sliderStore}>
                    <div className="card">
                        <div className="card-header text-right">
                            <Link href="/admin/slider" className="btn btn-sm btn-info me-2">
                                <i className="fa fa-reply me-1" aria-hidden="true"></i>
                                Quay lại
                            </Link>
                            <button type="submit" className="btn btn-sm btn-success" name="CHANGEADD">
                                <i className="fa fa-save me-1" aria-hidden="true"></i>
                                Lưu
                            </button>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="mb-3">
                                        <label>Tên banner (*)</label>
                                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="name" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label>Liên kết</label>
                                        <input value={link} onChange={(e)=>setLink(e.target.value)} type="text" name="link" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label>Mô tả (*)</label>
                                        <textarea value={description} onChange={(e)=>setDescription(e.target.value)} name="detail" rows="5" className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="mb-3">
                                        <label>Vị trí (*)</label>
                                        <select value={position} onChange={(e)=>setPosition(e.target.value)} name="position" className="form-control">
                                            <option value="">None</option>
                                            <option value="slider_main">Slider Main</option>
                                            <option value="footer">Footer</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label>Sắp xếp</label>
                                        <select value={sort_order} onChange={(e)=>setSortOrder(e.target.value)} name="position" className="form-control">
                                            <option value="">None</option>
                                            {sliders.map((sli)=>{
                                                return(
                                                    <option key={sli.id} value={sli.sort_order + 1}>Sau: {sli.name}</option>
                                                );
                                            })}
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label>Hình (*)</label>
                                        <input type="file" name="image" id="image" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label>Trạng thái</label>
                                        <select value={status} onChange={(e)=>setStatus(e.target.value)} name="status" className="form-control">
                                            <option value="1">Xuất bản</option>
                                            <option value="2">Chưa xuất bản</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </section>
        </div>

    );
}

export default Slider_Create;