<template>
	<view>
		<page-head :title="title"></page-head>
		<view>
			<form @submit="searchOkay()">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							输入大学名称（模糊匹配）
						</view>
						<view class="uni-list-cell-db">
							<input v-model="school_name" class="uni-input" type="text" placeholder="请输入大学名称" name="title"></input>
						</view>
					</view>
				</view>
				<view v-for="(item,key) in schools" :key="key">
					<view class="uni-list">
						<view class="uni-list-cell">
							<view class="uni-list-cell-left">
								{{key + 1}}.名称
							</view>
							<view class="uni-list-cell-db">
								<input v-model="item.school_name" class="uni-input" type="text" placeholder=" " name="title" disabled></input>
							</view>
						</view>
					</view>
					<view class="uni-list">
						<view class="uni-list-cell">
							<view class="uni-list-cell-left">
								所在省份
							</view>
							<view class="uni-list-cell-db">
								<input v-model="schools[key].school_province" class="uni-input" type="text" placeholder=" " name="title" disabled></input>
							</view>
						</view>
					</view>
					<view class="uni-list">
						<view class="uni-list-cell">
							<view class="uni-list-cell-left">
								大学类型
							</view>
							<view class="uni-list-cell-db">
								<input v-model="item.school_level" class="uni-input" type="text" placeholder=" " name="title" disabled></input>
							</view>
						</view>
					</view>
					<view class="uni-list">
						<view class="uni-list-cell">
							<view class="uni-list-cell-left">
								大学官网
							</view>
							<view class="uni-list-cell-db">
								<input v-model="item.school_website" class="uni-input" type="text" placeholder=" " name="title" disabled></input>
							</view>
						</view>
					</view>
					<view class="uni-list">
						<view class="uni-list-cell">
							<view class="uni-list-cell-left">
								大学城市
							</view>
							<view class="uni-list-cell-db">
								<input v-model="item.school_city" class="uni-input" type="text" placeholder=" " name="title" disabled></input>
							</view>
						</view>
					</view>
					<view style="margin-bottom: 20px;">
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
				title: 'Common_University',
				school_name: '',
				schools:[{
                "school_name": "",
                "school_province": "",
                "school_level": "",
                "school_website": "",
                "school_city": ""
            }]
			}
		},
		methods: {
			searchOkay: function() {
				var params = {
					s: "App.Common_University.Search", // 必须，待请求的接口服务名称
					school_name: this.school_name,
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						console.log(res.data.data.schools[0]);
						this.schools = res.data.data.schools
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
