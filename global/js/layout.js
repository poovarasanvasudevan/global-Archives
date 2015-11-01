var path = window.location.pathname.split('/').pop();


function topHeader() {
	document.write('<div class="row top-header"><div class="col-md-6 logo_img"><a class="navbar-brand" href="index.html"> <img src="images/htclogo.png" height="50"></a><div class="logotxt">Telehealth Solutions</div></div><div class="col-md-6 logout_ico">Welcome <span class="username">Username</span> <i class="glyphicon glyphicon-user"></i><i class="glyphicon glyphicon-triangle-bottom dropdown-toggle" data-toggle="dropdown" id="menu1"></i><ul class="dropdown-menu" role="menu" aria-labelledby="menu1" id="userDropDown"><li role="presentation"><a role="menuitem" tabindex="-1" href="#">My Account</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-toggle="modal" data-target="#ChangePassword">Change Password</a></li><li role="presentation" class="divider"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="#">Sign Out</a></li></ul></div></div><div class="col-lg-12"><nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="#">TeleHealth</a></div><div id="navbar" class="navbar-collapse collapse"><ul class="nav navbar-nav"><li><a href="#">Home</a></li><li><a href="#">About Us</a></li><li><a href="#">Contact Us</a></li><!--<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a><ul class="dropdown-menu custom-menu" role="menu"><li><a href="#">Action</a></li><li><a href="#">Another action</a></li><li><a href="#">Something else here</a></li><li class="divider"></li><li class="dropdown-header">Nav header</li><li><a href="#">Separated link</a></li><li><a href="#">One more separated link</a></li></ul></li></ul>--></div><!--/.nav-collapse --></div><!--/.container-fluid --></nav></div>');
}

function change_PwdPopUp() {
	document.write('<!-- Change Password Pop Up--><div class="modal fade" id="ChangePassword"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">Change Password</h4></div><form><div class="modal-body"><div class="form-group"><label for="exampleInputEmail1">Current Password</label><input type="password" class="form-control" id="currentPassword"></div><div class="form-group"><label for="exampleInputPassword1">New Password</label><input type="password" class="form-control" id="newPassword"></div><div class="form-group"><label for="exampleInputPassword1">Confirm Password</label><input type="password" class="form-control" id="confirmPassword"></div></div></form><div class="modal-footer"><button type="button" class="btn btn-primary btn-sm">Change Password</button><button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Close</button></div></div></div></div><!-- Change Password Pop Up End -->')
	
}

function forgotPwd_PopUp () {
	document.write('<!--Forgot Password Pop Up--><div class="modal fade" id="ForgotPassword"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">Forgot Password</h4></div><form><div class="modal-body"><div class="form-group"><label for="exampleInputEmail1">User ID</label><input type="mail" class="form-control" id="email" placeholder="Enter your registered Email ID"></div></div></form><div class="modal-footer"><button type="button" class="btn btn-primary btn-sm">Submit</button><button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Close</button></div></div></div></div><!--Forgot Password Pop End -->');
}

function patient_details_icons() {
	document.write('<div class="container patient_details_icon"><ul class="nav-dash patient_dashboard"><li><a href="patient_vitals_grid.html" data-toggle="tooltip"  class="animation-fadeIn" data-original-title="Vitals"><i class="glyphicon glyphicon-user"></i><span class="badge badge-success">Vitals</span></a></li><li><a href="allergies_grid.html" data-toggle="tooltip" class="animation-fadeIn active" data-original-title="Allergies"><i class="glyphicon glyphicon-certificate"></i><span class="badge badge-inverse">Allergies</span></a></li><li><a href="documents_grid.html" data-toggle="tooltip" class="animation-fadeIn" data-original-title="Clinical Documents"><i class="fa fa-file-pdf-o"></i><span class="badge badge-inverse">Clinical Documents</span></a></li><li><a href="prescirption_grid.html" data-toggle="tooltip" title="" class="animation-fadeIn" data-original-title="Prescriptions"><i class="fa fa-pencil-square-o"></i><span class="badge badge-inverse">Prescriptions</span></a></li><li><a href="referral_grid.html" data-toggle="tooltip" title="" class="animation-fadeIn" data-original-title="Referrals"><i class="fa fa-file-text-o"></i><span class="badge badge-inverse">Referrals</span></a></li><li><a href="lab_order_grid.html" data-toggle="tooltip" title="" class="animation-fadeIn" data-original-title="Lab Orders"><i class="glyphicon glyphicon-tint"></i><span class="badge badge-inverse">Lab Orders</span></a></li><li><a href="clinical_notes_grid.html" data-toggle="tooltip" title="" class="animation-fadeIn" data-original-title="Lab Orders"><i class="glyphicon glyphicon-book"></i><span class="badge badge-inverse">Clinical Notes</span></a></li></ul></div>');
}


function footer() {
	document.write('<footer class="footer"><div class="container"><p class="text-muted">&copy; 2015 TeleHealth</p></div></footer>');
}