//接口链接为http://api.okayapi.com/docs.php?api=Ext.IP.GetInfo

<template>
	<view>
		<page-head :title="title"></page-head>
		<view>
			<form @submit="showOkay()">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							请输入IP
						</view>
						<view class="uni-list-cell-db">
							<input v-model="ip" class="uni-input" type="text" placeholder="请输入汉字名称" name="title"></input>
						</view>
					</view>
				</view>

				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							IP归属地为
						</view>
						<view class="uni-list-cell-db">
							<input v-model="first" class="uni-input" type="text" placeholder=" " name="title" disabled></input>
						</view>
					</view>
				</view>
								<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							IP所在城市为
						</view>
						<view class="uni-list-cell-db">
							<input v-model="second" class="uni-input" type="text" placeholder=" " name="title" disabled></input>
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
	</view>
</template>
<script>
	import * as okayapi from '../../../components/okayapi/okayapi.js';


	export default {
		data() {
			return {
				title: 'IP',
				first: '',
				ip: '',
				second:','
			}
		},
		methods: {
			showOkay: function() {
				var params = {
					s: "Ext.IP.GetInfo", // 必须，待请求的接口服务名称
					ip: this.ip,
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						this.first = res.data.data.data.country
						this.second = res.data.data.data.city
					},
					fail: res => {
						console.log(res);
					},
					complete: () => {}
				});
			},
		}
	}
</script>
