<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Tôi là lập trình viên Front-End Web Developer với niềm đam mê tạo ra các trang web đẹp mắt và tiện ích thuận tiện tương tác và đáp ứng tốt. tôi có kinh nghiệm làm việc với HTML, CSS, JavaScript, ReactJS, Tailwind CSS, và Git. Tôi là người học nhanh hiểu nhanh và luôn muốn mở rộng thêm kiến thức cũng như kỹ năng của mình. Tôi là người có thể làm việc độc lập đơn lẻ hoặc làm việc cùng nhóm đều đạt được kết quả và hiệu quả tốt nhất để tạo ra được những sản phẩm ứng dụng tuyệt vời.',
				},
				{
					id: 2,
					bio:
						'Tôi là người có thể làm việc độc lập đơn lẻ hoặc làm việc cùng nhóm đều đạt được kết quả và hiệu quả tốt nhất để tạo ra được những sản phẩm ứng dụng tuyệt vời. Thế mạnh của tôi là tự xử lý và giải quyết vấn đề.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="https://img.clipart-library.com/24/bc152e02-efe2-4d8c-b6a4-3e0657d410a9.png"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
