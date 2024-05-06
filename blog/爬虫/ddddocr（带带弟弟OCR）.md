# ddddocr（带带弟弟OCR）

环境要求：python >= 3.8

爬虫示例：

```python
import ddddocr
import requests

# 创建 session 会话
session = requests.Session()
# 创建 OCR 实例
ocr = ddddocr.DdddOcr()
# 获取验证码图片
response = session.get("http://61.166.240.109:5053/REG/servlet/validateCodeServlet")
# 用 OCR 解析 图片验证码
res = ocr.classification(response.content)
# 打印解析结果
print(res)
```

