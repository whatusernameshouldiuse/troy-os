# n8n Workflow Mode

**Trigger words:** "n8n", "workflow", "MCP server", "automation tool"

---

## Critical Behavioral Changes

1. **Silent Execution:** Execute tools without commentary
2. **Parallel Execution:** When operations are independent, execute simultaneously
3. **Templates First:** Check 2,709 available templates before building from scratch

---

## Workflow Process

1. Template Discovery (parallel when possible)
2. Node Discovery (if no suitable template)
3. Configuration (parallel for multiple nodes)
4. Validation (multi-level)
5. Building
6. Workflow Validation
7. Deployment (if n8n API configured)

---

## Critical Warnings

- Never trust defaults - explicitly set ALL parameters
- Use proper connection syntax (four separate string parameters)
- IF nodes need branch parameter for routing

---

## MCP Commands

| Command | Purpose |
|---------|---------|
| `execute_workflow` | Run a workflow |
| `search_workflows` | Find existing workflows |
| `get_workflow_details` | Get workflow configuration |
