import { useNavigate } from "react-router-dom";
import '../App.css'
export const UjKomment = () => {
    const navigate = useNavigate();

    return (
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>ÚJ komment</h2>
        <form
        onSubmit={(event) =>{
            event.persist();
            event.preventDefault();
            fetch(`https://harmadik.sulla.hu/Comment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: event.target.name.value,
                    email: event.target.email.value,
                    body: event.target.body.value,
                }),
            })
            .then(() => {
                    navigate("/");
                })
            .catch(console.log)
        }}>
            <div className="form-group row pb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" />
            </div>
            <div className="form-group row pb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" />
            </div>
            <div className="mb-form-group row pb-3">
                <label htmlFor="body" className="form-label">Body</label>
                <input type="text" className="form-control" id="body" name="body" />
            </div>
            <button type="submit" className="btn btn-success">Mentés</button> &nbsp;&nbsp;&nbsp;
            <button type="reset" className="btn btn-danger">Reset</button>
        </form>
        </div>
    );
}