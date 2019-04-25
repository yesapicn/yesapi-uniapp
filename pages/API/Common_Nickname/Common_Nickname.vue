//接口链接为http://api.okayapi.com/docs.php?api=App.Common_Nickname
<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-title uni-common-mt uni-common-pl">随机昵称</view>
		<view class="uni-list">
		<view class="uni-title uni-common-mt uni-common-pl">性别</view>
			<radio-group @change="radioChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === current"  @click="nicknameOkay()"/>
					</view>
					<view>{{item.name}}</view>
				</label>
			</radio-group>
		<view class="uni-title uni-common-mt uni-common-pl">语言</view>
			<radio-group @change="radioChangSecond">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in itemsSecond" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === currentSecond"  @click="nicknameOkay()" />
					</view>
					<view>{{item.name}}</view>
				</label>
			</radio-group>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					随机昵称
				</view>
				<view class="uni-list-cell-db">
					<input v-model="first" class="uni-input" type="text" placeholder=" " name="title" disabled></input>
				</view>
			</view>
		</view>
		<view class="uni-padding-wrap">
			<view class="uni-btn-v">
				<button type="primary" formType="submit" @click="nicknameOkay()">转换</button>
			</view>
		</view>
	</view>
</template>
<script>
	import * as okayapi from '../../../components/okayapi/okayapi.js';


	export default {
		data() {
			return {
				title: 'Common_Nickname',
				items: [{
						value: '男',
						name: '男'
					},
					{
						value: '女',
						name: '女',
						checked: 'true'
					},
				],
				itemsSecond: [
					{
						value: '中文',
						name: '中文',
						checked: 'true'
					},{
						value: '英文',
						name: '英文'
					},
				],
				current: 0,
				currentSecond: 0,
				first:'',
			}
		},
		methods: {
			nicknameOkay: function() {
				var params = {
					s: "App.Common_Nickname.RandOne", // 必须，待请求的接口服务名称
					need_sex: this.items[this.current].value,
					need_lan: this.itemsSecond[this.currentSecond].value,
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						console.log(res);
						this.first = res.data.data.nickname
					},
					fail: res => {
						console.log(res);
					},
					complete: () => {}
				});
			},
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
			radioChangSecond: function(evt) {
				for (let i = 0; i < this.itemsSecond.length; i++) {
					if (this.itemsSecond[i].value === evt.target.value) {
						this.currentSecond = i;
						break;
					}
				}
			}
		}
	}
</script>
