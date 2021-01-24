export const Home = () => {
  return `<!-- Start of Navbar -->
            <nav class="navbar navbar-expand-lg navbar-light border-bottom shadow p-3 mb-5 bg-white">
                <a class="navbar-brand font-weight-bold" href="#">CS <span class="h3 font-weight-bolder text-success
        
                    ">50</span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
        
                <div class="clearfix collapse float-right navbar-collapse" id="navbarSupportedContent">
                    <ul class="float-right h5 navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="layouts/projects.html">My Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="layouts/contact.html">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <!--End of Navbar-->
        
            <div class="container">
        
                <div class="accordion m-5" id="accordionExample">
                    <h3 class="text-center h3">Home Page</h3>
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    WHO AM I
                                </button>
                            </h2>
                        </div>
        
                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                <em>My</em> Name is Med Amine Fh, 23 Years Old from Tunisia
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    HOBBIES
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body">
                                Gaming || Travel || Watching Series and Films || Learning New Good Staff || Coding
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Collapsible Group Item #3
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                3
                                wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                nulla
                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt
                                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <!-- Spinner -->
            <div id="spinner" class="text-center">
                <div class="spinner-grow" style="width: 7rem; height: 7rem;" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        `;
};
