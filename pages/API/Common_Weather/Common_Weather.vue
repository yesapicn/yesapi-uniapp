//接口链接为http://api.okayapi.com/docs.php?api=App.Common_Weather

<template>
	<view>
		<page-head :title="title"></page-head>
		<view>
			<form @submit="searchOkay()">
				<view v-for="(item,key) in array" :key="key">
					<view class="uni-list">
						<view class="uni-list-cell">
							<view class="uni-list-cell-left uni-badge-blue">
								{{item.title}}内云图
							</view>
						</view>
					</view>
					<image :src="item.pic"></image>

					<view style="margin-bottom: 20px;">
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
				title: 'Common_Weather',
				array: [],

			}
		},
		onLoad:function(){
			this.searchOkay()
		},
		methods: {
			searchOkay: function() {
				var params = {
					s: "App.Common_Weather.CloudChart", // 必须，待请求的接口服务名称
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						console.log(res);
						this.array = res.data.data.cloudchart
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
