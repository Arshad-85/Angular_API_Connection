namespace TaskManager_BackEnd.DTOs.RequestDTO
{
    public class TaskItemRequestDTO
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime Duedate { get; set; }
        public string Priority { get; set; }


    }
}
