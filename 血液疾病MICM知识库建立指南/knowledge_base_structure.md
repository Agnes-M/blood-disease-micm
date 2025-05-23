# 血液疾病MICM知识库结构设计

## 1. 整体架构

血液疾病MICM知识库将采用分层结构，主要分为以下几个部分：

1. **首页与导航**：提供知识库概述、使用指南和快速导航
2. **疾病分类系统**：基于WHO 2022分类系统组织血液疾病
3. **MICM框架**：每种疾病的形态学、免疫表型、细胞遗传学和分子生物学特征
4. **诊断指南与共识**：整合中国、美国、欧洲和WHO的诊断指南
5. **参考资源**：相关文献、网站和工具资源

## 2. 疾病分类系统

基于WHO 2022分类和参考网站内容，将血液疾病分为以下主要类别：

1. **骨髓增生性肿瘤**
   - 慢性髓性白血病（BCR-ABL1阳性）
   - 慢性中性粒细胞白血病
   - 真性红细胞增多症
   - 原发性骨髓纤维化
   - 原发性血小板增多症
   - 慢性嗜酸性粒细胞白血病
   - 未分类的骨髓增生性肿瘤

2. **肥大细胞增多症**

3. **伴嗜酸性粒细胞增多和基因重排的髓系/淋巴系肿瘤**

4. **骨髓增生异常/骨髓增生性肿瘤**
   - 慢性粒单核细胞白血病
   - 非典型慢性髓性白血病
   - 幼年粒单核细胞白血病
   - 伴环形铁粒幼红细胞的骨髓增生异常/骨髓增生性肿瘤
   - 未分类的骨髓增生异常/骨髓增生性肿瘤

5. **骨髓增生异常综合征**
   - 单系骨髓增生异常综合征
   - 多系骨髓增生异常综合征
   - 伴原始细胞增多的骨髓增生异常综合征
   - 伴单纯5q缺失的骨髓增生异常综合征
   - 未分类的骨髓增生异常综合征

6. **伴生殖系统易感基因的髓系肿瘤**

7. **急性髓系白血病及相关前体肿瘤**
   - 伴重现性遗传异常的急性髓系白血病
   - 伴骨髓增生异常相关改变的急性髓系白血病
   - 治疗相关的髓系肿瘤
   - 未分类的急性髓系白血病
   - 骨髓肉瘤
   - 髓系肉瘤
   - 急性白血病，混合表型

8. **浆细胞样树突细胞肿瘤**

9. **谱系不明确的急性白血病**

10. **前体淋巴细胞肿瘤**
    - B淋巴母细胞白血病/淋巴瘤
    - T淋巴母细胞白血病/淋巴瘤

11. **成熟B细胞肿瘤**
    - 慢性淋巴细胞白血病/小淋巴细胞淋巴瘤
    - 单克隆B细胞淋巴细胞增多症
    - B细胞前淋巴瘤
    - 脾边缘区淋巴瘤
    - 毛细胞白血病
    - 浆细胞肿瘤
    - 滤泡性淋巴瘤
    - 套细胞淋巴瘤
    - 弥漫性大B细胞淋巴瘤
    - 伯基特淋巴瘤

12. **成熟T和NK细胞肿瘤**
    - T细胞大颗粒淋巴细胞白血病
    - 慢性NK细胞淋巴增殖性疾病
    - 侵袭性NK细胞白血病
    - 成人T细胞白血病/淋巴瘤
    - 外周T细胞淋巴瘤
    - 血管免疫母细胞T细胞淋巴瘤
    - 肠病相关T细胞淋巴瘤
    - 肝脾T细胞淋巴瘤
    - 皮肤T细胞淋巴瘤

13. **霍奇金淋巴瘤**
    - 结节性淋巴细胞为主型霍奇金淋巴瘤
    - 经典霍奇金淋巴瘤

14. **组织细胞和树突细胞肿瘤**

15. **良性血液疾病**
    - 贫血（缺铁性、巨幼红细胞性等）
    - 血小板减少症
    - 白细胞减少症
    - 溶血性疾病
    - 凝血功能障碍

## 3. MICM框架设计

每种疾病将按照MICM框架进行详细描述：

### 3.1 形态学(Morphology)
- 外周血涂片特征
- 骨髓涂片特征
- 骨髓活检特征
- 淋巴结或其他组织学特征
- 特殊染色结果
- 形态学图谱

### 3.2 免疫表型(Immunophenotype)
- 流式细胞术标志物表达模式
- 免疫组化标志物表达模式
- 关键诊断性标志物
- 鉴别诊断标志物
- 预后相关标志物
- 免疫表型图谱

### 3.3 细胞遗传学(Cytogenetics)
- 染色体核型分析
- 荧光原位杂交(FISH)结果
- 常见染色体异常
- 罕见染色体异常
- 预后相关染色体异常
- 细胞遗传学图谱

### 3.4 分子生物学(Molecular Biology)
- 基因突变谱
- 融合基因
- 基因表达谱
- 表观遗传学改变
- 预后相关分子标志物
- 靶向治疗相关分子标志物
- 分子生物学图谱

## 4. 诊断指南与共识整合

每种疾病将整合以下诊断指南和共识：

1. **中国指南**：中华医学会血液学分会、中国临床肿瘤学会等机构发布的指南
2. **美国指南**：NCCN指南、ASH指南等
3. **欧洲指南**：ELN建议、ESMO指南等
4. **WHO分类**：WHO 2022血液肿瘤分类标准
5. **诊断算法**：基于MICM特征的诊断流程图
6. **鉴别诊断要点**：与相似疾病的鉴别要点

## 5. 技术实现

知识库将采用HTML网页形式实现，具体包括：

1. **响应式设计**：适配不同设备（电脑、平板、手机）
2. **导航系统**：
   - 顶部导航栏：主要分类
   - 侧边栏：疾病子类别
   - 面包屑导航：当前位置
   - 搜索功能：快速查找疾病或特征

3. **内容展示**：
   - 分页展示：避免单页内容过长
   - 折叠面板：按需展开详细内容
   - 表格展示：结构化数据
   - 图文结合：增强理解

4. **交互功能**：
   - 图片放大功能
   - 表格排序功能
   - 内容比较功能
   - 打印优化

## 6. 文件组织结构

知识库文件将按以下结构组织：

```
blood_disease_micm/
├── index.html                 # 首页
├── css/                       # 样式文件
├── js/                        # 脚本文件
├── images/                    # 图片资源
├── diseases/                  # 疾病分类
│   ├── myeloid/               # 髓系肿瘤
│   ├── lymphoid/              # 淋巴系肿瘤
│   └── benign/                # 良性疾病
├── micm/                      # MICM框架详解
│   ├── morphology/            # 形态学
│   ├── immunophenotype/       # 免疫表型
│   ├── cytogenetics/          # 细胞遗传学
│   └── molecular/             # 分子生物学
├── guidelines/                # 诊断指南
│   ├── china/                 # 中国指南
│   ├── us/                    # 美国指南
│   ├── europe/                # 欧洲指南
│   └── who/                   # WHO分类
└── references/                # 参考资源
```

## 7. 后续开发计划

1. 首先创建HTML模板和基本样式
2. 实现导航系统和基础框架
3. 按疾病类别逐步填充MICM内容
4. 整合各国诊断指南
5. 添加图片和交互功能
6. 进行内容审核和优化
7. 最终交付完整知识库
