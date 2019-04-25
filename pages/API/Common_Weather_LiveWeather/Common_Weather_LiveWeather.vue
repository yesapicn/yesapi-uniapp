//接口链接为http://api.okayapi.com/docs.php?service=App.Common_Weather.LiveWeather&detail=1&type=fold

<template>
	<view>
		<page-head :title="title"></page-head>
		<view>
			<form @submit="searchOkay()">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							输入城市
						</view>
						<view class="uni-list-cell-db">
							<input v-model="city" class="uni-input" type="text" placeholder="请输入城市名称如'广州'" name="title"></input>
						</view>
					</view>
				</view>
				
				<view class="uni-padding-wrap">
					<view class="uni-btn-v">
						<button type="primary" formType="submit">转换</button>
					</view>
				</view>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
								天气情况
						</view>
						<view class="uni-list-cell-db">
							<input v-model="weather.weather" class="uni-input" type="text" placeholder=" " name="title"></input>
						</view>
					</view>
				</view>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							日期
						</view>
						<view class="uni-list-cell-db">
							<input v-model="weather.date" class="uni-input" type="text" placeholder=" " name="title"></input>
						</view>
					</view>
				</view>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							更新时间
						</view>
						<view class="uni-list-cell-db">
							<input v-model="weather.time" class="uni-input" type="text" placeholder=" " name="title"></input>
						</view>
					</view>
				</view>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							温度
						</view>
						<view class="uni-list-cell-db">
							<input v-model="weather.tem" class="uni-input" type="text" placeholder=" " name="title"></input>
						</view>
					</view>
				</view>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							风向
						</view>
						<view class="uni-list-cell-db">
							<input v-model="weather.win" class="uni-input" type="text" placeholder=" " name="title"></input>
						</view>
					</view>
				</view>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							风速等级

						</view>
						<view class="uni-list-cell-db">
							<input v-model="weather.win_speed" class="uni-input" type="text" placeholder=" " name="title"></input>
						</view>
					</view>
				</view>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							湿度
						</view>
						<view class="uni-list-cell-db">
							<input v-model="weather.humidity" class="uni-input" type="text" placeholder=" " name="title"></input>
						</view>
					</view>
				</view>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							气压（hPa）
						</view>
						<view class="uni-list-cell-db">
							<input v-model="weather.pressure" class="uni-input" type="text" placeholder=" " name="title"></input>
						</view>
					</view>
				</view>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							PM2.5
						</view>
						<view class="uni-list-cell-db">
							<input v-model="weather.air_pm25" class="uni-input" type="text" placeholder=" " name="title"></input>
						</view>
					</view>
				</view>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							空气质量等级
						</view>
						<view class="uni-list-cell-db">
							<input v-model="weather.air_level" class="uni-input" type="text" placeholder=" " name="title"></input>
						</view>
					</view>
				</view>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							空气质量描述
						</view>
						<view class="uni-list-cell-db">
							<input v-model="weather.air_tips" class="uni-input" type="text" placeholder=" " name="title"></input>
						</view>
					</view>
				</view>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							空气指数
						</view>
						<view class="uni-list-cell-db">
							<input v-model="weather.air" class="uni-input" type="text" placeholder=" " name="title"></input>
						</view>
					</view>
				</view>

				<view style="margin-bottom: 20px;">
				</view>
			</form>
		</view>
	</view>
</template>
<script>
	import * as okayapi from '../../../components/okayapi/okayapi.js';


	export default {
		data() {
			return {
				title: 'Common_Weather',
				city: '',
				weather: [],
			}
		},
		methods: {
			searchOkay: function() {
				var params = {
					s: "App.Common_Weather.LiveWeather", // 必须，待请求的接口服务名称
					city: this.city,
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						this.weather = res.data.data.weather
						console.log(this.weather);
					},
					fail: res => {
						console.log(res);
					},
					complete: () => {}
				});
			}
		}
	}
</script>
