
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import topicservice from "../../services/TopicService";

function ListTopic() {
    const [topics, setTopic] = useState([]);
    useEffect(function () {
        (async function () {
            await topicservice.getAll().then(function (result) {
                setTopic(result.data.topics)
            });
        })();
    }, [])
    return (
        <div>
            <div class="sidebar-top">
                <h2 class="sidebar-title">Danh mục bài viết</h2>
            </div>
            <div className="row">
                {topics.map(function (topic, index) {
                    return <Link key={index} className="text-category" to={'../bai-viet/' + topic.slug}>{topic.name}</Link>;
                })}
            </div>
        </div>
    );
}

export default ListTopic;