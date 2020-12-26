import React from 'react'

function contact() {
    return (
        <div>
        <h1 className="mt-5 mb-5">İletişim</h1>
        <form action="/action_page.php">
            <div class="form-group">
            <label for="pwd">İsim</label>
            <input type="text" class="form-control" id="pwd" />
        </div>
        <div class="form-group">
            <label for="pwd">Soyisim</label>
            <input type="text" class="form-control" id="pwd" />
        </div>
        <div class="form-group">
            <label for="email">Email addresi:</label>
            <input type="email" class="form-control" id="email"/>
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Mesajınız</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-danger">Submit</button>
        </form>
        </div>
    )
}

export default contact
