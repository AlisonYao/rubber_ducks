# rubber_ducks
GGhackathon

see id of inputs in input_id.txt  inside frontend

Alison notes:
the file public is what firebase really looks for
The index.html file is the main webapp for the single-page application
I will keep everything in frontend and backend files separately and try to put things together in the public file

rn, I can do login with google in public/index.html
please install firebase and run "firebase deploy" to actually see it work
the login does not work on a local server





数据库中需要的数据：
username
gender: male/female/other
age_group:elementary school/middle school/high school/university/Other
room_size: large/small
camera: on/off
total_study_time: 总计划学习时长（进入学习室-出学习室）hours mins secs
unit_study_time:每学unit_study_time之后休息
unit_rest_time:休息时长
学习记录：
记录学习日期+时长（开始时间，退出时间）+学习计划
last_study_time: 取学习记录中最近的日期+时长  2020/07/06 03:12:10
accumulated_study_time: 相加时长 20:30:01
past_history:学习打卡 取所有完成学习计划时长的日期
收到点赞数：int num
study_plan:本次学习计划




===========================================
my profile
card id: demo-card-wide-profile
显示当前用户用户名：<span  id="addusername">
显示性别：<li class="mdl-list__item" id="showgender">
	radio btn ：id="option-1"男  checked
		   id="option-2"女
		   id="option-3"其他
显示年龄段：<div   id="show_agegroup">
                        <option value="0">elementary school</option>显示数据库
                        <option value="1">elementary school</option>
                        <option value="2">middle school</option>
                        <option value="3">high school</option>
                        <option value="4">university</option>
                        <option value="5">Other</option>
		option value=0为数据库中年龄（此处为小学）
		更新数据库所用字符串：
		<div class="select-selected">university</div>

          
保存档案修改（数据库更新）：	<buttonid="save_profile_change" >


====================================
room setting
card id: demo-card-wide-roomsetting
显示年龄段：<div   id="room_agegroup">
	<option value="0">数据库中年龄</option>
房间大小：id="option-111" large   checked
	id="option-112" small
摄像头偏好：<input id="switch-1">
	checked:开

	<div class="select-selected">elementary school</div>
	为需要储存的
学习时长：<input id="studytimepicker" 
	显示数据库中学习时长 data-value=“13：01：00”>
修改时长：<div class="time-wrapper">
		<div data-title="HOURS" class="hours">11</div>
		<div data-title="MINS" class="minutes">01</div>
		<div data-title="SECS" class="seconds">23</div>
	</div>
保存房间设置修改：        button id=save_roomsetting_btn



====================================
study history
card id:demo-card-wide-studyhistory
显示上次学习时长（db）：id="laststudytime"
显示累计学习时长（db）：id="shoeaccutime"
学习日历打卡：<div id="studydate"> 
	data-special按数据库更新or字符串+=“，2020/07/6”
	（需要在数据库里建立打卡日期field）
收到点赞数：id="thumb_num"

====================================
enter room进入学习室前确认
card id:demo-card-wide-enterroom
年龄组：<div id="confirm_age">
	<option value="0">Select:</option>select文字改为数据库内年龄
	<div class="select-selected">Select:</div>
房间大小：<input id="option-11">large   checked
	 <input id="option-12">small
摄像头：id="switch-2" checked为开
学习总时长：span  id="confirm_studytime"
	data-value="01:00:00"
	修改：<div class="time-wrapper">
		<div data-title="HOURS" class="hours">01</div>
		<div data-title="MINS" class="minutes">13</div>
		<div data-title="SECS" class="seconds">00</div>
	          </div>
		取此处数字
单次学习时长：span id="unit_studytime"
		data-value="00:45:00"
		修改同上
休息时间时长：span id=id="unit_resttime"
		data-value="00:45:00"
		修改同上
学习计划： textfield  id="sample5"
	（inner HTML）提交学习计划至数据库
进入学习室按钮：button id="enter_room_now"



