//接口链接为http://api.okayapi.com/docs.php?api=Common_Joke 


<template>
	<view>
		<page-head :title="title"></page-head>
		<view>
			<form @submit="showOkay()">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							Joke
						</view>
						<view class="uni-list-cell-db">
							<textarea v-model="first" type="text" placeholder=" " name="title" disabled></textarea>
						</view>
					</view>
				</view>
				<view class="uni-padding-wrap">
					<view class="uni-btn-v">
						<button type="primary" formType="submit">随机一个笑话~</button>
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
				title: 'Joke',
				first: '',
			}
		},
		methods: {
			showOkay: function() {
				var params = {
					s: "App.Common_Joke.RandOne", // 必须，待请求的接口服务名称
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						this.first = res.data.data.joke
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
