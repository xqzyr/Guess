import React from "react";
import { Button } from "react-bootstrap";
import "./Top.css";

export default function Top() {
    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className="col">
            <Button variant="primary" onClick={refreshPage}>
                Restart
            </Button>{" "}
            <hr />
        </div>
    );
}
