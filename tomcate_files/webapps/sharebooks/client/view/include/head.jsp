<div id="headContainer" class="row">
	<div id="appTitle" class="vertical-center">
		SHAREBOOKS
	</div>


	<div id="profile" class="pointer vertical-center" ng-click="profileHandler.toggleProfileList()">

		<img src="<%=imagesFolderPath%>/userProfile.png" width="40" height="40">
		<!-- <div id="profileList" ng-hide="profileHandler.profileListHidden" class="absolute">	
			<table id="profileListTable">
				<tr ng-repeat="option in profileHandler.profileListOptions">
					<td>{{option}}</td>
				</tr>
			</table>
		</div> -->
	</div>
</div>