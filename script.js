//your JS code here. If required.
<button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModal">Sign Up</button>

	<div class="modal" id="myModal">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h2>Create Account</h2>
					<button data-bs-dismiss="modal" class="close">
						<span class="material-icons">close
						</span>
					</button>

				</div>
				<div class="modal-body">
					<div>
						<label for="email">Email Address</label>
						<input type="email" id="email" class="form-control" placeholder="Enter Email">
						<div class="form-text">Your Information is safe with us</div>
					</div>
					<div>
						<label for="password">Password</label>
						<input type="password" id="password" class="form-control" placeholder="Password">
					</div>
					<div>
						<label for="confirm-password">Confirm Password</label>
						<input type="password" id="confirm-password" class="form-control" placeholder="Confirm Password">
					</div>
				</div>
				<div class="modal-footer">
					<button class="btn btn-success">Submit</button>
				</div>
			</div>
		</div>
	</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
		crossorigin="anonymous"></script>

<script type="text/javascript" src="./script.js">