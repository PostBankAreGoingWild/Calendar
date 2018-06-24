$(document).ready(function () {
    $("#add").click(function () {
        $(".modal h5").html("Добави събитие");
        $(".modal .modal-body").html(`
   		<form class = "form-horizontal" action = "/event/add">
			<div class="form-group">
				<label class="control-label col-sm-2" for="name">Заглавие:</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="name" placeholder="Въведи Заглавие">
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="text">Текст:</label>
				<div class="col-sm-10">
					<textarea type="text" class="form-control" id="desc" placeholder="Въведи Текст"></textarea>
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="name">Начална дата:</label>
						<div class="row">
							<div class='col-sm-10'>
								<div class="form-group">
									<div class='input-group date' id='datetimepicker1'>
										<input type='datetime-local' class="form-control" name = "start" />
										<span class="input-group-addon">
											<span class="glyphicon glyphicon-calendar"></span>
										</span>
									</div>
								</div>
							</div>
							<script type="text/javascript">
								$(function () {
									$('#datetimepicker1').datetimepicker();
								});
							</script>
						</div>
					</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="name">Крайна дата:</label>
						<div class="row">
							<div class='col-sm-10'>
								<div class="form-group">
									<div class='input-group date' id='datetimepicker1'>
										<input type='datetime-local' class="form-control" name = "end"/>
										<span class="input-group-addon">
											<span class="glyphicon glyphicon-calendar"></span>
										</span>
									</div>
							<script type="text/javascript">
								$(function () {
									$('#datetimepicker1').datetimepicker();
								});
							</script>
						</div>
					</div>
				</div>
			</div>
			<select class="selectpicker">
				<option value = "0">Официален празник</option>
				<option value = "1">Неработен ден</option>
				<option value = "5">Рожден ден</option>
				<option value = "2">Имен ден</option>
				<option value = "3">Значим международен ден</option>
				<option value = "5">Други</option>
            </select>
<br><hr>
			<div class = "d-flex justify-content-center">
                <button type="submit" role="button" class = "btn btn-danger"><h1>Изпрати</h1></button>
            </div>
	</form>
                  `);
            $(".modal").show();
        });
    }
);