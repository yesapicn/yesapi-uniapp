//接口链接为http://api.okayapi.com/docs.php?service=Ext.Avatar.Show&detail=1&type=fold

<template>
	<view>
		<page-head :title="title"></page-head>
		<view>
			<form @submit="showOkay()">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							输入转换字符串
						</view>
						<view class="uni-list-cell-db">
							<input @input="showOkay()" v-model="nickname" class="uni-input" type="text" placeholder="请输入汉字名称" name="title"></input>
						</view>
					</view>
				</view>

				<view class="uni-list">
					<view class="uni-list-cell" style="margin:0 auton;">
							<image :src="first"></image>
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
				title: 'Avatar',
				first: '',
				data: '',
			}
		},
		methods: {
			showOkay: function() {
				var params = {
					s: "Ext.Avatar.Show", // 必须，待请求的接口服务名称
					nickname: this.nickname,
				};
				var str = '';
				for(let key in okayapi.enryptData(params)){
					str += key+ "=" + okayapi.enryptData(params)[key] + '&';
				}
				this.first = this.okayapiHost + '?' + str;
			},
		}
	}
</script>
