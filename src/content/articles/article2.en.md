---
title: Experience handling millions of records:How to improve preprocessing performance.
description: Experience handling millions of records:How to improve preprocessing performance.
lang: en
image: ""
date: 2024-05-28
---

[Project](https://github.com/yvelltt/massive-file-import-api)

When I first handled millions of records, the project faced a unique limitation: all processing logic had to be executed through APIs—no local scripts or direct database access were allowed. Additionally, the database schema was fixed and could not be modified. As a result, the only area where I could optimize was in the preprocessing layer.

#### Phase 1: Streaming Data and Row-by-Row Transformation

At the beginning, due to my lack of experience with large-scale data, I used a streaming approach to clean and transform each record one by one. This worked well with small test datasets, but in the actual environment, the performance dropped dramatically. As the business logic grew more complex, the codebase became long, hard to maintain, and difficult to understand.

#### Turning Point: Stepping Back to Observe Data Patterns

When I hit a bottleneck, I decided to stop coding and step back to observe the structure of the data itself. I asked myself: "Does the data follow any patterns or rules?" The answer was yes! I discovered several opportunities to optimize the logic by leveraging predictable patterns in the data:

- Some columns had values within a fixed or predictable range.

- Certain transformations could be simplified using formulas or rule-based mappings. 

- By grouping data based on attributes such as hash values, timestamps, and device IDs, I could batch and parallelize processing instead of handling each record individually.

### Solution: Mathematical Transformation + Batch Processing
To improve both performance and maintainability, I adopted the following strategies:

1. Pattern Recognition and Formula-Based Optimization

By identifying predictable patterns and applying formulas, I reduced CPU usage.
Due to the fixed database schema, all optimization had to be done in the preprocessing layer.

2. **Refactoring with Batch-Oriented Processing** 
    - In the initial phase, the file is read without processing the data. Only the position and a summary of each row are recorded.
    - The data is then split into fixed-size batches (e.g., 50,000 rows per batch) based on line count.
    - Each batch undergoes preprocessing, validation, and hash calculation.
    - If all records in a batch pass validation, the batch is committed.
    - If any record is found to be invalid or anomalous, the entire batch is rolled back to ensure atomicity and data integrity.
    

### The End

Due to the sensitivity and privacy of the real-world data, I am unable to share full details publicly. However, I recreated the data structure using simulated examples to validate the approach and assess its potential benefits.

The results have shown that this strategy significantly simplifies complex logic and lays a more stable foundation for future maintenance and system scalability.


