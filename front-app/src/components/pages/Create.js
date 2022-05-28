const Create = () =>{
    return(
        <div class="create-post-area">
            <div class="container">
                <div class="create-post-content col-md-8 offset-md-2">
                    <h3>Create Post</h3>
                    <form>
                        <div class="row">
                            <div class="form-group col-md-6">
                            <label for="inputAddress2">Post title</label>
                            <input type="email" class="form-control" id="inputEmail4"/>
                            </div>
                            <div class="form-group col-md-6">
                            <label for="inputAddress2">Post thumbnail link</label>
                            <input type="password" class="form-control" id="inputPassword4"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress2">Post Content</label>
                            <textarea class="form-control" id="inputAddress" rows="4"></textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Sign in</button>
                        </form>
                </div>
            </div>
        </div>
    );
}
export default Create;