<template>
  <div
    class="bg-white sm:bg-[#ECF2FF] w-full h-screen flex items-start sm:items-center justify-center"
  >
    <div
      class="w-full sm:max-w-[736px] sm:h-[512px] sm:rounded-[32px] bg-white shadow-wrapper-shadow flex flex-col sm:flex-row overflow-hidden"
    >
      <div
        class="w-full sm:w-1/2 h-full bg-scale-bg pt-6 pb-10 sm:pt-[38px] flex flex-col items-center sm:rounded-[32px] rounded-br-[32px] rounded-bl-[32px]"
      >
        <p
          class="text-lg sm:text-2xl font-bold !leading-tight text-light-blue mb-6 sm:mb-[35px] mt-px -ml-[6px]"
        >
          Your Result
        </p>
        <div
          class="w-[140px] sm:w-[200px] h-[140px] sm:h-[200px] rounded-full bg-oval-bg flex flex-col items-center justify-center mb-6 sm:mb-7"
        >
          <h1
            class="text-white text-[56px] sm:text-[72px] font-extrabold !leading-[100%] sm:mb-1 mt-[9px]"
          >
            76
          </h1>
          <p
            class="text-light-blue font-bold text-base sm:text-lg !leading-tight"
          >
            of 100
          </p>
        </div>
        <h2
          class="text-white text-2xl sm:text-[32px] font-bold !leading-tight mb-2 sm:mb-4 mt-px -ml-[5px]"
        >
          Great
        </h2>
        <p
          class="text-light-blue font-medium text-base sm:text-lg text-center max-w-[260px] !leading-tight"
        >
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div
        class="w-full sm:w-1/2 pt-6 sm:pt-[38px] pb-[30px] px-[30px] sm:px-10"
      >
        <p
          class="text-lg sm:text-2xl font-bold !leading-tight text-dark-navy mb-6 sm:mb-[30px]"
        >
          Summary
        </p>
        <div class="flex flex-col gap-y-4 mb-6 sm:mb-[41px]">
          <div
            v-for="(item, idx) in summaryItems"
            :key="idx"
            :class="item.className"
            class="w-full h-[56px] px-4 rounded-xl flex items-center justify-between"
          >
            <div class="flex items-center gap-x-3">
              <img :src="item.icon" :alt="item.category" />
              <p
                :class="item.textColor"
                class="text-base sm:text-lg font-medium !leading-tight"
              >
                {{ item.category }}
              </p>
            </div>
            <div>
              <p class="text-base sm:text-lg text-dark-navy font-bold">
                {{ item.score }} <span class="opacity-50 ml-1">/ 100</span>
              </p>
            </div>
          </div>
        </div>
        <button
          class="summary-btn hover:after:!opacity-100 after:duration-200 after:ease-in-out overflow-hidden w-full h-[56px] bg-dark-navy rounded-full text-lg font-bold text-white !leading-tight relative"
        >
          <span class="relative z-10">Continue</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { summaryItems } from "@/data/index.js"
</script>

<style scoped>
.box-reaction {
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(255, 255, 255, 0.95) 100%
    ),
    #f55;
}

.box-memory {
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(255, 255, 255, 0.95) 100%
    ),
    #ffb21e;
}

.box-verbal {
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(255, 255, 255, 0.95) 100%
    ),
    #00bb8f;
}

.box-visual {
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(255, 255, 255, 0.95) 100%
    ),
    #1125d6;
}

.summary-btn::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, #75f 0%, #6943ff 0.01%, #2f2ce9 100%);
  z-index: 0;
  opacity: 0;
}
</style>
