import { RiCalendar2Fill, RiUser2Fill } from "react-icons/ri";

export default function CardBerita({ title, author, date, description, imgSrc }) {
    return (
        <>
            <div className="card shadow-sm border-light">
                <img src={imgSrc} className="card-img-top img-berita" alt={title} />
                <div className="card-body">
                    <h5 className="card-title mb-0">{title}</h5>
                    <div className="meta my-2 d-flex align-items-center gap-1">
                        <div className="author bg-light p-1 rounded-3 d-flex align-items-center gap-2">
                            <RiUser2Fill className="icon-berita" />
                            {author}
                        </div>
                        <div className="author bg-light p-1 rounded-3 d-flex align-items-center gap-2">
                            <RiCalendar2Fill className="icon-berita" />
                            {date}
                        </div>
                    </div>
                    <p className="text-deskripsi">{description}</p>
                </div>
            </div>
        </>
    )
}
