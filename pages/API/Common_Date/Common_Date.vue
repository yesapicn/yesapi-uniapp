//接口链接为http://api.okayapi.com/docs.php?api=App.Common_Date

<template>
	<view>
		<page-head :title="title"></page-head>
		<form @submit="getDaysFromNowOkay()">
			<view class="uni-title uni-common-pl">日期选择</view>
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						当前选择
					</view>
					<view class="uni-list-cell-db">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{date}}</view>
						</picker>
					</view>
				</view>
			</view>

			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						距离今天已经
					</view>
					<view class="uni-list-cell-db">
						<input v-model="first" class="uni-input" type="text" placeholder=" " name="title" disabled></input>
					</view>
				</view>
			</view>
			<view class="uni-padding-wrap">
				<view class="uni-btn-v">
					<button type="primary" formType="submit">转换</button>
				</view>
			</view>
		</form>

		<form @submit="changeIntoNation()">
			<view class="uni-list">
			<view class="uni-title uni-common-pl">农历转国历</view>
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">

					</view>
					<view class="uni-list-cell-db">
						<input v-model="second" class="uni-input" type="text" placeholder="农历转国历" name="title" disabled></input>
					</view>
				</view>
			</view>
			<view class="uni-padding-wrap">
				<view class="uni-btn-v">
					<button type="primary" formType="submit">转换</button>
				</view>
			</view>
		</form>

		<form @submit="changeIntoLunar()">
			<view class="uni-list">
			<view class="uni-title uni-common-pl">国历转农历</view>
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">

					</view>
					<view class="uni-list-cell-db">
						<input v-model="third" class="uni-input" type="text" placeholder="国历转农历" name="title" disabled></input>
					</view>
				</view>
			</view>
			<view class="uni-padding-wrap">
				<view class="uni-btn-v">
					<button type="primary" formType="submit">转换</button>
				</view>
			</view>
		</form>

	</view>
</template>
<script>
	import * as okayapi from '../../../components/okayapi/okayapi.js';


	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				computed: {
					startDate() {
						return this.getDate('start');
					},
					endDate() {
						return this.getDate('end');
					}
				},
				date: currentDate,
				title: 'Common_Date',
				first: '',
				abbr: '',
				second: '',
				convert: '',
				third: '',
				name: '',
				fourth: '',
				sentence: '',
			}
		},
		methods: {
			getDaysFromNowOkay: function() {
				console.log(this.date.toLocaleString().slice(8, 10));
				var params = {
					s: "App.Common_Date.GetDaysFromNow", // 必须，待请求的接口服务名称
					yearStart: this.date.toLocaleString().slice(0, 4),
					monthStart: this.date.toLocaleString().slice(5, 7),
					dayStart: this.date.toLocaleString().slice(8, 10),
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						this.first = res.data.data.diff
					},
					fail: res => {
						console.log(res);
					},
					complete: () => {}
				});
			},
			changeIntoNation: function() {
				var params = {
					s: "App.Common_Date.ChangeIntoNation", // 必须，待请求的接口服务名称
					yearStart: this.date.toLocaleString().slice(0, 4),
					monthStart: this.date.toLocaleString().slice(5, 7),
					dayStart: this.date.toLocaleString().slice(8, 10),
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						this.second = res.data.data.lunarDate
					},
					fail: res => {
						console.log(res);
					},
					complete: () => {}
				});
			},
			changeIntoLunar: function() {
				var params = {
					s: "App.Common_Date.ChangeIntoLunar", // 必须，待请求的接口服务名称
					yearStart: this.date.toLocaleString().slice(0, 4),
					monthStart: this.date.toLocaleString().slice(5, 7),
					dayStart: this.date.toLocaleString().slice(8, 10),
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						this.third = res.data.data.lunarDate
					},
					fail: res => {
						console.log(res);
					},
					complete: () => {}
				});
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
		}
	}
</script>
